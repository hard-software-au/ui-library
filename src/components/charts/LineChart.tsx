import { useTheme } from '@mui/material/styles';
import { LineChart as Chart } from '@mui/x-charts/LineChart';

export interface LineChartProps {
  // This assumes each yAxis.data's length is normalised to be the same length as xAxis
  xAxis: string[],
  yAxis: {
    id: string,
    label: string,
    curve: string,
    stackId: string,
    stackOrder: 'ascending',
    data: number[],
  }[],
  curveType: 'linear' | 'natural' | 'step',
  areaUnderGraph: boolean,
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
      yAxis={[{ width: 50 }]}
      series={
      props.yAxis.map(item => {
        return {
          id: item.id,
          label: item.label,
          curve: props.curveType,
          stack: item.stackId,
          area: props.areaUnderGraph,
          stackOrder: 'ascending',
          data: item.data
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
      }}
      hideLegend
    >
      <AreaGradient color={theme.palette.primary.dark} id="organic" />
      <AreaGradient color={theme.palette.primary.main} id="referral" />
      <AreaGradient color={theme.palette.primary.light} id="direct" />
    </Chart>
  );
}
