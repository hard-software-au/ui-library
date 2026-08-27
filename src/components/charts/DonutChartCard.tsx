import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import DonutChart, { type DonutChartProps } from "./DonutChart";

export interface DonutChartCardProps extends DonutChartProps {
  title: string;
  description?: string;
  summary?: string;
  label?: string;
}

export default function BarChartCard(props: DonutChartCardProps) {
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
            {props.label && <Chip size="small" color="error" label={props.label} />}
          </Stack>)}
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            {props.description}
          </Typography>
        </Stack>
        <DonutChart {...props} />
      </CardContent>
    </Card>
  );
}
