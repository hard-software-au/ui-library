import type { Meta, StoryObj } from '@storybook/react-vite';

import PieChart from './PieChart';

const meta = {
  title: 'Components/Charts/PieChart',
  component: PieChart,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof PieChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isDonut: false,
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

export const DonutChart: Story = {
  args: {
    isDonut: true,
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
