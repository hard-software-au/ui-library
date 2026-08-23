import { BarChart as Chart } from '@mui/x-charts/BarChart';
import { useTheme } from '@mui/material/styles';

export interface BarChartProps {
  xAxis: Date[] | string[],
  yAxis: [
    {
      id: string,
      label: string,
      data: string[] | number[],
    }
  ]
}

export default function BarChart() {
  const theme = useTheme();
  const colorPalette = [
    (theme.vars || theme).palette.primary.dark,
    (theme.vars || theme).palette.primary.main,
    (theme.vars || theme).palette.primary.light,
  ];
  return (
    <Chart
      borderRadius={8}
      colors={colorPalette}
      xAxis={[
        {
          scaleType: 'band',
          categoryGapRatio: 0.5,
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          height: 24,
        },
      ]}
      yAxis={[{ width: 50 }]}
      series={[
        {
          id: 'page-views',
          label: 'Page views',
          data: [2234, 3872, 2998, 4125, 3357, 2789, 2998],
          stack: 'A',
        },
        {
          id: 'downloads',
          label: 'Downloads',
          data: [3098, 4215, 2384, 2101, 4752, 3593, 2384],
          stack: 'A',
        },
        {
          id: 'conversions',
          label: 'Conversions',
          data: [4051, 2275, 3129, 4693, 3904, 2038, 2275],
          stack: 'A',
        },
      ]}
      height={250}
      margin={{ left: 0, right: 0, top: 20, bottom: 0 }}
      grid={{ horizontal: true }}
      hideLegend
    />
  );
}
