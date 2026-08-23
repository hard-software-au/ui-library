import type { Meta, StoryObj } from '@storybook/react-vite';
import ChartUserByCountry from './ChartUserByCountry';

const meta = {
  title: 'Components/ChartUserByCountry',
  component: ChartUserByCountry,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof ChartUserByCountry>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
