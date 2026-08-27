import type { Meta, StoryObj } from '@storybook/react-vite';

import LineChart from './LineChart';

const meta = {
  title: 'Components/Charts/LineChart',
  component: LineChart,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof LineChart>;

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

export const Default: Story = {
  args: {
    xAxis: getDaysInMonth(8, 2026),
    yAxis: [
      {
        id: 'direct',
        label: 'Direct',
        curve: 'linear',
        stackId: 'total',
        stackOrder: 'ascending',
        data: [
          300, 900, 600, 1200, 1500, 1800, 2400, 2100, 2700, 3000, 1800, 3300,
          3600, 3900, 4200, 4500, 3900, 4800, 5100, 5400, 4800, 5700, 6000,
          6300, 6600, 6900, 7200, 7500, 7800, 8100, 8500
        ],
      },
      {
        id: 'referral',
        label: 'Referral',
        curve: 'linear',
        stackId: 'total',
        stackOrder: 'ascending',
        data: [
          500, 900, 700, 1400, 1100, 1700, 2300, 2000, 2600, 2900, 2300, 3200,
          3500, 3800, 4100, 4400, 2900, 4700, 5000, 5300, 5600, 5900, 6200,
          6500, 5600, 6800, 7100, 7400, 7700, 8000, 8300
        ],
      },
      {
        id: 'organic',
        label: 'Organic',
        curve: 'linear',
        stackId: 'total',
        stackOrder: 'ascending',
        data: [
          1000, 1500, 1200, 1700, 1300, 2000, 2400, 2200, 2600, 2800, 2500,
          3000, 3400, 3700, 3200, 3900, 4100, 3500, 4300, 4500, 4000, 4700,
          5000, 5200, 4800, 5400, 5600, 5900, 6100, 6300, 6400
        ],
      }
    ],
    curveType: 'linear',
    areaUnderGraph: true,
  },
};

export const OverlayLineWithAreaChart: Story = {
  args: {
    xAxis: getDaysInMonth(8, 2026),
    yAxis: [
      {
        id: 'direct',
        label: 'Direct',
        curve: 'linear',
        stackId: 'total_1',
        stackOrder: 'ascending',
        data: [
          300, 900, 600, 1200, 1500, 1800, 2400, 2100, 2700, 3000, 1800, 3300,
          3600, 3900, 4200, 4500, 3900, 4800, 5100, 5400, 4800, 5700, 6000,
          6300, 6600, 6900, 7200, 7500, 7800, 8100, 8500
        ],
      },
      {
        id: 'referral',
        label: 'Referral',
        curve: 'linear',
        stackId: 'total_2',
        stackOrder: 'ascending',
        data: [
          500, 900, 700, 1400, 1100, 1700, 2300, 2000, 2600, 2900, 2300, 3200,
          3500, 3800, 4100, 4400, 2900, 4700, 5000, 5300, 5600, 5900, 6200,
          6500, 5600, 6800, 7100, 7400, 7700, 8000, 8300
        ],
      },
      {
        id: 'organic',
        label: 'Organic',
        curve: 'linear',
        stackId: 'total_3',
        stackOrder: 'ascending',
        data: [
          1000, 1500, 1200, 1700, 1300, 2000, 2400, 2200, 2600, 2800, 2500,
          3000, 3400, 3700, 3200, 3900, 4100, 3500, 4300, 4500, 4000, 4700,
          5000, 5200, 4800, 5400, 5600, 5900, 6100, 6300, 6400
        ],
      }
    ],
    curveType: 'linear',
    areaUnderGraph: true,
  },
};

export const OverlayLineWithoutAreaChart: Story = {
  args: {
    xAxis: getDaysInMonth(8, 2026),
    yAxis: [
      {
        id: 'direct',
        label: 'Direct',
        curve: 'linear',
        stackId: 'total_1',
        stackOrder: 'ascending',
        data: [
          300, 900, 600, 1200, 1500, 1800, 2400, 2100, 2700, 3000, 1800, 3300,
          3600, 3900, 4200, 4500, 3900, 4800, 5100, 5400, 4800, 5700, 6000,
          6300, 6600, 6900, 7200, 7500, 7800, 8100, 8500
        ],
      },
      {
        id: 'referral',
        label: 'Referral',
        curve: 'linear',
        stackId: 'total_2',
        stackOrder: 'ascending',
        data: [
          500, 900, 700, 1400, 1100, 1700, 2300, 2000, 2600, 2900, 2300, 3200,
          3500, 3800, 4100, 4400, 2900, 4700, 5000, 5300, 5600, 5900, 6200,
          6500, 5600, 6800, 7100, 7400, 7700, 8000, 8300
        ],
      },
      {
        id: 'organic',
        label: 'Organic',
        curve: 'linear',
        stackId: 'total_3',
        stackOrder: 'ascending',
        data: [
          1000, 1500, 1200, 1700, 1300, 2000, 2400, 2200, 2600, 2800, 2500,
          3000, 3400, 3700, 3200, 3900, 4100, 3500, 4300, 4500, 4000, 4700,
          5000, 5200, 4800, 5400, 5600, 5900, 6100, 6300, 6400
        ],
      }
    ],
    curveType: 'linear',
    areaUnderGraph: false,
  },
};


export const DashLine: Story = {
  args: {
    xAxis: getDaysInMonth(8, 2026),
    yAxis: [
      {
        id: 'direct',
        label: 'Direct',
        curve: 'linear',
        stackId: 'total_1',
        stackOrder: 'ascending',
        data: [
          300, 900, 600, 1200, 1500, 1800, 2400, 2100, 2700, 3000, 1800, 3300,
          3600, 3900, 4200, 4500, 3900, 4800, 5100, 5400, 4800, 5700, 6000,
          6300, 6600, 6900, 7200, 7500, 7800, 8100, 8500
        ],
      },
      {
        id: 'referral',
        label: 'Referral',
        curve: 'linear',
        stackId: 'total_2',
        stackOrder: 'ascending',
        data: [
          500, 900, 700, 1400, 1100, 1700, 2300, 2000, 2600, 2900, 2300, 3200,
          3500, 3800, 4100, 4400, 2900, 4700, 5000, 5300, 5600, 5900, 6200,
          6500, 5600, 6800, 7100, 7400, 7700, 8000, 8300
        ],
      },
      {
        id: 'organic',
        label: 'Organic',
        curve: 'linear',
        stackId: 'total_3',
        stackOrder: 'ascending',
        data: [
          1000, 1500, 1200, 1700, 1300, 2000, 2400, 2200, 2600, 2800, 2500,
          3000, 3400, 3700, 3200, 3900, 4100, 3500, 4300, 4500, 4000, 4700,
          5000, 5200, 4800, 5400, 5600, 5900, 6100, 6300, 6400
        ],
      }
    ],
    curveType: 'linear',
    areaUnderGraph: false,
    dashLine: true,
  },
};