import type { Meta, StoryObj } from '@storybook/react-vite';

import BarChart from './BarChart';

const xAxis = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

const meta = {
  title: 'Components/Charts/BarChart',
  component: BarChart,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleStackWithLegend: Story = {
  args: {
    xAxis,
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
  },
};

export const SingleStackWithoutLegend: Story = {
  args: {
    xAxis,
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
    showLegend: false,
  },
};

export const MultipleStacks: Story = {
  args: {
    xAxis,
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
        stackGroup: 'B',
      },
    ],
    showLegend: false,
  },
};