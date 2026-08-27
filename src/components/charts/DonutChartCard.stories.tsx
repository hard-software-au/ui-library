import type { Meta, StoryObj } from '@storybook/react-vite';

import DonutChartCard from './DonutChartCard';

const meta = {
  title: 'Components/Charts/DonutChartCard',
  component: DonutChartCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof DonutChartCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Monthly Active User",
    description: "Monthly active user for the last 6 months",
    summary: "98.5K",
    label: "-8%",
    primaryText: "98.5K",
    secondaryText: "Total users",
    data: [
      { label: 'India', value: 50000 },
      { label: 'USA', value: 35000 },
      { label: 'Brazil', value: 10000 },
      { label: 'Other', value: 5000 },
    ]
  }
};
