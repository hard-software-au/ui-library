import type { Meta, StoryObj } from '@storybook/react-vite';
import SparklineCard from './SparklineCard.tsx';

const meta = {
  title: 'Components/charts/SparklineCard',
  component: SparklineCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof SparklineCard>;

export default meta;
type Story = StoryObj<typeof meta>;

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
const sparklineData = [
  200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340,
  380, 360, 400, 380, 420, 400, 440, 420, 460, 440, 480, 460, 500, 480, 520,
];

export const Up: Story = {
  args: {
    title: 'Users',
    value: '14k',
    interval: 'Last 30 days',
    trend: 'up',
    points: points,
    data: sparklineData,
  },
};

export const Down: Story = {
  args: {
    title: 'Conversions',
    value: '325',
    interval: 'Last 30 days',
    trend: 'down',
    points: points,
    data: sparklineData.slice().reverse(),
  },
};

export const Neutral: Story = {
  args: {
    title: 'Event count',
    value: '200k',
    interval: 'Last 30 days',
    trend: 'neutral',
    points: points,
    data: sparklineData,
  },
};
