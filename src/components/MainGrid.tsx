import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Copyright from '../internals/components/Copyright';
import HighlightedCard from './cards/HighlightedCard.tsx';
import SummaryCard from "./cards/SummaryCard.tsx";
import BarChartCard, { type BarChartTileProps } from './charts/BarChartCard';
import type { SparklineCardProps } from './charts/SparklineCard';
import SparklineCard from './charts/SparklineCard';
import CustomizedDataTable from './CustomizedDataTable';
import CustomizedTreeView from './CustomizedTreeView';
import PieChartWithLegend from './PieChartWithLegend';
import SessionsChart from './SessionsChart';

const points = [
  "Aug 1",
  "Aug 2",
  "Aug 3",
  "Aug 4",
  "Aug 5",
  "Aug 6",
  "Aug 7",
  "Aug 8",
  "Aug 9",
  "Aug 10",
  "Aug 11",
  "Aug 12",
  "Aug 13",
  "Aug 14",
  "Aug 15",
  "Aug 16",
  "Aug 17",
  "Aug 18",
  "Aug 19",
  "Aug 20",
  "Aug 21",
  "Aug 22",
  "Aug 23",
  "Aug 24",
  "Aug 25",
  "Aug 26",
  "Aug 27",
  "Aug 28",
  "Aug 29",
  "Aug 30",
  "Aug 31"
]

const data: SparklineCardProps[] = [
  {
    title: 'Users',
    summary: '14k',
    description: 'Last 30 days',
    trend: 'up',
    points: points,
    data: [
      200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340, 380,
      360, 400, 380, 420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
    ],
  },
  {
    title: 'Conversions',
    summary: '325',
    description: 'Last 30 days',
    trend: 'down',
    points: points,
    data: [
      1640, 1250, 970, 1130, 1050, 900, 720, 1080, 900, 450, 920, 820, 840, 600, 820,
      780, 800, 760, 380, 740, 660, 620, 840, 500, 520, 480, 400, 360, 300, 220,
    ],
  },
  {
    title: 'Event count',
    summary: '200k',
    description: 'Last 30 days',
    trend: 'neutral',
    points: points,
    data: [
      500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510, 530,
      520, 410, 530, 520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
    ],
  },
];

const barChartTileData: BarChartTileProps = {
  title: "Page views and downloads",
  description: "Page views and downloads for the last 6 months",
  summary: "1.3M",
  label: "-8%",
  xAxis: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  yAxis: [
    {
      id: 'page-views',
      label: 'Page views',
      data: [2234, 3872, 2998, 4125, 3357, 2789, 2998],
      stackGroup: 'A',
    },
    {
      id: 'downloads',
      label: 'Downloads',
      data: [3098, 4215, 2384, 2101, 4752, 3593, 2384],
      stackGroup: 'A',
    },
    {
      id: 'conversions',
      label: 'Conversions',
      data: [4051, 2275, 3129, 4693, 3904, 2038, 2275],
      stackGroup: 'A',
    }
  ],
  showLegend: false
}

export default function MainGrid() {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Overview
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        <Grid container size={12}>
          {data.map((card, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
              <SummaryCard {...card} />
            </Grid>
          ))}
        </Grid>
        <Grid container size={12}>
          {data.map((card, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
              <SparklineCard {...card} />
            </Grid>
          ))}
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <HighlightedCard
            title={"Explore your data"}
            description={"Uncover performance and visitor insights with our data wizardry."}
            prefix={<InsightsRoundedIcon />}
          />
        </Grid>
        <Grid size={12}>
          <SessionsChart />
        </Grid>
        <Grid size={12}>
          <BarChartCard {...barChartTileData} />
        </Grid>
      </Grid>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Details
      </Typography>
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, lg: 9 }}>
          <CustomizedDataTable />
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
          <Stack
            direction={{ xs: 'column', sm: 'row', lg: 'column' }}
            sx={{ gap: 2 }}
          >
            <CustomizedTreeView />
            <PieChartWithLegend />
          </Stack>
        </Grid>
      </Grid>
      <Copyright sx={{ my: 4 }} />
    </Box>
  );
}
