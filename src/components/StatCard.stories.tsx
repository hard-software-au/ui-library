import type { Meta, StoryObj } from '@storybook/react-vite';
import StatCard from './StatCard';

const meta = {
  title: 'Components/StatCard',
  component: StatCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof StatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

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
    data: sparklineData,
  },
};

export const Down: Story = {
  args: {
    title: 'Conversions',
    value: '325',
    interval: 'Last 30 days',
    trend: 'down',
    data: sparklineData.slice().reverse(),
  },
};

export const Neutral: Story = {
  args: {
    title: 'Event count',
    value: '200k',
    interval: 'Last 30 days',
    trend: 'neutral',
    data: sparklineData,
  },
};
