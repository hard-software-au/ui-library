import type { Meta, StoryObj } from '@storybook/react-vite';
import LineChartCard from './LineChartCard.tsx';

const meta = {
  title: 'Components/Charts/LineChartCard',
  component: LineChartCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof LineChartCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
