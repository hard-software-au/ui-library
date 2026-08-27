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
}

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

  const colorPalette = [
    theme.palette.primary.light,
    theme.palette.primary.main,
    theme.palette.primary.dark,
  ];

  return (
    <Chart
      colors={colorPalette}
      xAxis={[
        {
          scaleType: 'point',
          data: props.xAxis,
          tickInterval: (_index, i) => (i + 1) % 5 === 0,
          height: 24,
        },
      ]}
      yAxis={
        props.yAxes && props.yAxes.length > 0
          ? props.yAxes.map((axis) => ({
              id: axis.id,
              label: axis.label,
              position: axis.position,
              width: 50,
            }))
          : [{ width: 50 }]
      }
      series={
        props.series.map(item => {
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
      height={250}
      margin={{ left: 0, right: 20, top: 20, bottom: 0 }}
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
  );
}
