import type { Meta, StoryObj } from '@storybook/react-vite';

import SessionsChart from './SessionsChart';

const meta = {
  title: 'Components/LineChartCard',
  component: SessionsChart,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof SessionsChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
