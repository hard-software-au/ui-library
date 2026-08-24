import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import BarChart, {type BarChartProps} from "./BarChart.tsx";

export interface BarChartTileProps extends BarChartProps {
  title: string;
  description?: string;
  summary?: string;
  label?: string;
}

export default function BarChartCard(props: BarChartTileProps) {

  return (
    <Card variant="outlined" sx={{ width: '100%' }}>
      <CardContent>
        <Typography component="h2" variant="subtitle2" gutterBottom>
          {props.title}
        </Typography>
        <Stack sx={{ justifyContent: 'space-between' }}>
          {props.summary && (<Stack
            direction="row"
            sx={{
              alignContent: { xs: 'center', sm: 'flex-start' },
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Typography variant="h4" component="p">
              {props.summary}
            </Typography>
            <Chip size="small" color="error" label={props.label} />
          </Stack>)}
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            {props.description}
          </Typography>
        </Stack>
        <BarChart xAxis={props.xAxis} yAxis={props.yAxis} showLegend={props.showLegend} />
      </CardContent>
    </Card>
  );
}
