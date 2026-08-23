import type { Meta, StoryObj } from '@storybook/react-vite';
import PageViewsBarChart from './PageViewsBarChart';

const meta = {
  title: 'Components/PageViewsBarChart',
  component: PageViewsBarChart,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof PageViewsBarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
