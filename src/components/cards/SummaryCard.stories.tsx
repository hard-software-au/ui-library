import type { Meta, StoryObj } from '@storybook/react-vite';

import SummaryCard from './SummaryCard';

const meta = {
  title: 'Components/Cards/SummaryCard',
  component: SummaryCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof SummaryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithoutLabel: Story = {
  args: {
    title: "Page views and downloads",
    description: "Page views and downloads for the last 6 months",
  }
};

export const WithLabel: Story = {
  args: {
    title: "Page views and downloads",
    description: "Page views and downloads for the last 6 months",
    summary: "1.3M",
    label: "-8%",
  }
};
