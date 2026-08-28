import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { LineChart as Chart, lineClasses } from '@mui/x-charts/LineChart';

export interface LineChartYAxis {
  id: string,
  label?: string,
  position?: 'left' | 'right',
}

export interface LineChartProps {
  // This assumes each yAxis.data's length is normalised to be the same length as xAxis
  xAxis: string[],
  // One or two y-axes. Defaults to a single unlabelled left axis when omitted.
  yAxes?: LineChartYAxis[],
  series: {
    id: string,
    label: string,
    curve: string,
    stackId: string,
    stackOrder: 'ascending',
    data: number[],
    // Which axis (from `yAxes`) this series plots against. Defaults to the first axis.
    yAxisId?: string,
  }[],
  curveType: 'linear' | 'natural' | 'step',
  areaUnderGraph: boolean,
  dashLine?: boolean,
  // Drag on chart body to select a time range and zoom in.
  // NOTE: @mui/x-charts (community edition) ships no working drag/wheel zoom
  // (that's @mui/x-charts-pro only), so this slices the visible data window
  // ourselves based on where the user drags.
  zoomable?: boolean,
}

// Fixed layout constants shared between the chart's own config and our
// pixel math below. Keep these two in sync if either one changes.
const MARGIN = { left: 0, right: 20, top: 20, bottom: 0 };
const X_AXIS_HEIGHT = 24;
const Y_AXIS_WIDTH = 50;
const CHART_HEIGHT = 250;
const MIN_DRAG_PX = 4;
const MIN_ZOOM_POINTS = 2;

function AreaGradient({ color, id }: { color: string; id: string }) {
  return (
    <defs>
      <linearGradient id={id} x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor={color} stopOpacity={0.5} />
        <stop offset="100%" stopColor={color} stopOpacity={0} />
      </linearGradient>
    </defs>
  );
}

export default function LineChart(props: LineChartProps) {
  const theme = useTheme();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [drag, setDrag] = React.useState<{ startX: number; currentX: number } | null>(null);
  const [zoomRange, setZoomRange] = React.useState<[number, number] | null>(null);

  // Stale zoom indices (from a previous dataset) would silently mis-slice
  // a differently-shaped array, so drop the zoom whenever the data changes.
  React.useEffect(() => {
    setZoomRange(null);
  }, [props.xAxis]);

  const colorPalette = [
    theme.palette.primary.light,
    theme.palette.primary.main,
    theme.palette.primary.dark,
  ];

  const leftAxisCount = props.yAxes && props.yAxes.length > 0
    ? props.yAxes.filter((axis) => axis.position !== 'right').length
    : 1;
  const rightAxisCount = props.yAxes ? props.yAxes.filter((axis) => axis.position === 'right').length : 0;
  const plotLeft = leftAxisCount * Y_AXIS_WIDTH;
  const plotRight = rightAxisCount * Y_AXIS_WIDTH + MARGIN.right;
  const plotHeight = CHART_HEIGHT - MARGIN.top - MARGIN.bottom - X_AXIS_HEIGHT;

  const pointCount = props.xAxis.length;

  const clientXToIndex = React.useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return 0;
    const plotWidth = rect.width - plotLeft - plotRight;
    const relativeX = clientX - rect.left - plotLeft;
    const fraction = plotWidth > 0 ? Math.min(1, Math.max(0, relativeX / plotWidth)) : 0;
    return Math.round(fraction * (pointCount - 1));
  }, [plotLeft, plotRight, pointCount]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    setDrag({ startX: event.clientX, currentX: event.clientX });
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!drag) return;
    setDrag({ ...drag, currentX: event.clientX });
  };

  const finishDrag = () => {
    if (!drag) return;
    if (Math.abs(drag.currentX - drag.startX) >= MIN_DRAG_PX) {
      const startIdx = clientXToIndex(Math.min(drag.startX, drag.currentX));
      const endIdx = clientXToIndex(Math.max(drag.startX, drag.currentX));
      if (endIdx - startIdx + 1 >= MIN_ZOOM_POINTS) {
        setZoomRange([startIdx, endIdx]);
      }
    }
    setDrag(null);
  };

  const [zoomStart, zoomEnd] = zoomRange ?? [0, pointCount - 1];
  const visibleXAxis = props.xAxis.slice(zoomStart, zoomEnd + 1);
  const visibleSeries = props.series.map((item) => ({
    ...item,
    data: item.data.slice(zoomStart, zoomEnd + 1),
  }));

  return (
    <Box>
      {props.zoomable && zoomRange && (
        <Button variant="outlined" size="small" onClick={() => setZoomRange(null)} sx={{ mb: 1 }}>
          Reset zoom
        </Button>
      )}
      <Box ref={containerRef} sx={{ position: 'relative' }}>
        <Chart
          colors={colorPalette}
          xAxis={[
            {
              scaleType: 'point',
              data: visibleXAxis,
              tickInterval: (_index: unknown, i: number) => (i + 1) % 5 === 0,
              height: X_AXIS_HEIGHT,
            },
          ]}
          yAxis={
            props.yAxes && props.yAxes.length > 0
              ? props.yAxes.map((axis) => ({
                id: axis.id,
                label: axis.label,
                position: axis.position,
                width: Y_AXIS_WIDTH,
              }))
              : [{ width: Y_AXIS_WIDTH }]
          }
          series={
            visibleSeries.map(item => {
              return {
                id: item.id,
                label: item.label,
                curve: props.curveType,
                stack: item.stackId,
                area: props.areaUnderGraph,
                stackOrder: 'ascending',
                data: item.data,
                yAxisId: item.yAxisId,
              }
            })
          }
          height={CHART_HEIGHT}
          margin={MARGIN}
          grid={{ horizontal: true }}
          sx={{
            '& .MuiAreaElement-series-organic': {
              fill: "url('#organic')",
            },
            '& .MuiAreaElement-series-referral': {
              fill: "url('#referral')",
            },
            '& .MuiAreaElement-series-direct': {
              fill: "url('#direct')",
            },
            ...(props.dashLine && {
              [`& .${lineClasses.line}`]: {
                strokeDasharray: '10 5',
                strokeWidth: 1,
              },
            }),
          }}
          hideLegend
        >
          <AreaGradient color={theme.palette.primary.dark} id="organic" />
          <AreaGradient color={theme.palette.primary.main} id="referral" />
          <AreaGradient color={theme.palette.primary.light} id="direct" />
        </Chart>
        {props.zoomable && (
          <Box
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={finishDrag}
            onPointerCancel={finishDrag}
            sx={{
              position: 'absolute',
              left: plotLeft,
              top: MARGIN.top,
              right: plotRight,
              height: plotHeight,
              cursor: 'crosshair',
            }}
          >
            {drag && Math.abs(drag.currentX - drag.startX) >= MIN_DRAG_PX && (
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  height: '100%',
                  left: Math.min(drag.startX, drag.currentX) - (containerRef.current?.getBoundingClientRect().left ?? 0) - plotLeft,
                  width: Math.abs(drag.currentX - drag.startX),
                  backgroundColor: theme.palette.primary.main,
                  opacity: 0.2,
                  pointerEvents: 'none',
                }}
              />
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
}
