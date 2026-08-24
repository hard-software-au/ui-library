import { useTheme } from '@mui/material/styles';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { lineClasses } from '@mui/x-charts/LineChart';
import Box from "@mui/material/Box";

export interface SparklineProps {
  trend: 'up' | 'down' | 'neutral',
  points: string[],
  data: number[];
}

function AreaGradient({ color, id }: { color: string; id: string }) {
  return (
    <defs>
      <linearGradient id={id} x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor={color} stopOpacity={0.3} />
        <stop offset="100%" stopColor={color} stopOpacity={0} />
      </linearGradient>
    </defs>
  );
}

export default function Sparkline({ trend, points, data }: SparklineProps) {
  const theme = useTheme();

  const trendColors = {
    up:
      theme.palette.mode === 'light'
        ? theme.palette.success.main
        : theme.palette.success.dark,
    down:
      theme.palette.mode === 'light'
        ? theme.palette.error.main
        : theme.palette.error.dark,
    neutral:
      theme.palette.mode === 'light'
        ? theme.palette.grey[400]
        : theme.palette.grey[700],
  };
  const chartColor = trendColors[trend];

  return (
    <Box sx={{ width: '100%', height: 50 }}>
      <SparkLineChart
        color={chartColor}
        data={data}
        area
        showHighlight
        showTooltip
        xAxis={{
          scaleType: 'band',
          data: points,
        }}
        sx={{
          [`& .${lineClasses.area}`]: {
            fill: `url(#area-gradient})`,
          },
        }}
      >
        <AreaGradient color={chartColor} id={`area-gradient`} />
      </SparkLineChart>
    </Box>
  );
}
