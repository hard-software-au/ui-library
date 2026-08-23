import type { Meta, StoryObj } from '@storybook/react-vite';
import BarChart from './BarChart.tsx';

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

export const Default: Story = {};
