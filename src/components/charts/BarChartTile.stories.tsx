import type { Meta, StoryObj } from '@storybook/react-vite';
import BarChartTile from './BarChartTile.tsx';

const meta = {
  title: 'Components/Charts/BarChartTile',
  component: BarChartTile,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof BarChartTile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
