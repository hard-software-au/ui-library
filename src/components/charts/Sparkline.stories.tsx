import type { Meta, StoryObj } from '@storybook/react-vite';
import Sparkline from './Sparkline';

const meta = {
  title: 'Components/Charts/Sparkline',
  component: Sparkline,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Sparkline>;

export default meta;
type Story = StoryObj<typeof meta>;

function getDaysInMonth(month: number, year: number) {
  const date = new Date(year, month, 0);
  const monthName = date.toLocaleDateString('en-US', {
    month: 'short',
  });
  const daysInMonth = date.getDate();
  const days = [];
  let i = 1;
  while (days.length < daysInMonth) {
    days.push(`${monthName} ${i}`);
    i += 1;
  }
  return days;
}

export const UpTrend: Story = {
  args: {
    trend: 'up',
    points: getDaysInMonth(8, 2026),
    data: [
      520,
      480,
      500,
      460,
      480,
      440,
      460,
      420,
      440,
      400,
      420,
      380,
      400,
      360,
      380,
      340,
      360,
      320,
      340,
      300,
      240,
      280,
      240,
      100,
      380,
      240,
      260,
      220,
      24,
      200,
      231
    ]
  },
};
