import type { Meta, StoryObj } from '@storybook/react-vite';
import BarChartTile from './BarChartTile.tsx';

const meta = {
  title: 'Components/Charts/BarChartTile',
  component: BarChartTile,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof BarChartTile>;

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

export const Default: Story = {
  args: {
    title: "Page views and downloads",
    description: "Page views and downloads for the last 6 months",
    xAxis: xAxis,
    yAxis: yAxis
  }
};

export const BarchartWithSummary: Story = {
  args: {
    title: "Page views and downloads",
    description: "Page views and downloads for the last 6 months",
    summary: "1.3M",
    label: "-8%",
    xAxis: xAxis,
    yAxis: yAxis
  }
};
