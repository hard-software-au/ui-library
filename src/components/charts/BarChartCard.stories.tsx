import type { Meta, StoryObj } from '@storybook/react-vite';

import BarChartCard from './BarChartCard.tsx';

const meta = {
  title: 'Components/Charts/BarChartCard',
  component: BarChartCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof BarChartCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const xAxis = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
const yAxis = [
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
]

export const WithoutSummary: Story = {
  args: {
    title: "Page views and downloads",
    description: "Page views and downloads for the last 6 months",
    xAxis: xAxis,
    yAxis: yAxis
  }
};

export const WithSummary: Story = {
  args: {
    title: "Page views and downloads",
    description: "Page views and downloads for the last 6 months",
    summary: "1.3M",
    label: "-8%",
    xAxis: xAxis,
    yAxis: yAxis
  }
};
