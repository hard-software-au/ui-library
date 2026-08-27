import type { Meta, StoryObj } from '@storybook/react-vite';

import DonutChart from './DonutChart';

const meta = {
  title: 'Components/Charts/DonutChart',
  component: DonutChart,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof DonutChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
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
