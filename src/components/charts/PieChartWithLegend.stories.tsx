import type { Meta, StoryObj } from '@storybook/react-vite';

import PieChartWithLegend from './PieChartWithLegend';

const meta = {
  title: 'Components/Charts/PieChartWithLegend',
  component: PieChartWithLegend,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof PieChartWithLegend>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
