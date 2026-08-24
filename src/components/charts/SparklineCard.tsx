import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Sparkline, {type SparklineProps} from "./Sparkline.tsx";

export interface SparklineCardProps extends SparklineProps {
  title: string;
  value: string;
  interval: string;
}

export default function SparklineCard(props: SparklineCardProps) {
  const labelColors = {
    up: 'success' as const,
    down: 'error' as const,
    neutral: 'default' as const,
  };

  const color = labelColors[props.trend];
  const trendValues = { up: '+25%', down: '-25%', neutral: '+5%' };

  return (
    <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
      <CardContent>
        <Typography component="h2" variant="subtitle2" gutterBottom>
          {props.title}
        </Typography>
        <Stack
          direction="column"
          sx={{ justifyContent: 'space-between', flexGrow: '1', gap: 1 }}
        >
          <Stack sx={{ justifyContent: 'space-between' }}>
            <Stack
              direction="row"
              sx={{
                alignContent: { xs: 'center', sm: 'flex-start' },
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Typography variant="h4" component="p">
                {props.value}
              </Typography>
              <Chip size="small" color={color} label={trendValues[props.trend]} />
            </Stack>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              {props.interval}
            </Typography>
          </Stack>
          <Sparkline trend={props.trend} points={props.points} data={props.data} />
        </Stack>
      </CardContent>
    </Card>
  );
}
