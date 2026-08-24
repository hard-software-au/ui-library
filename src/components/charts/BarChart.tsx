import {BarChart as Chart, type BarSeries} from '@mui/x-charts/BarChart';
import { useTheme } from '@mui/material/styles';

export interface BarChartProps {
  // This assumes each yAxis.data's length is normalised to be the same length as xAxis
  xAxis: string[],
  yAxis: {
    id: string,
    label: string,
    data: number[],
    // The key that identifies the stacking group. Series with the same stack property will be stacked together.
    stackGroup: string,
  }[]
}

export default function BarChart(barChartProps: BarChartProps) {
  const theme = useTheme();
  const colorPalette = [
    (theme.vars || theme).palette.primary.dark,
    (theme.vars || theme).palette.primary.main,
    (theme.vars || theme).palette.primary.light,
  ];

  const barSeries: BarSeries[] = barChartProps.yAxis.map(group => {
    return {
      id: group.id,
      label: group.label,
      data: group.data,
      stack: group.stackGroup,
    }
  })

  return (
    <Chart
      borderRadius={8}
      colors={colorPalette}
      xAxis={[
        {
          scaleType: 'band',
          categoryGapRatio: 0.5,
          data: barChartProps.xAxis,
          height: 24,
        },
      ]}
      yAxis={[{ width: 50 }]}
      series={barSeries}
      height={250}
      margin={{ left: 0, right: 0, top: 20, bottom: 0 }}
      grid={{ horizontal: true }}
      hideLegend
    />
  );
}
