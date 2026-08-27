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
    series: [
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
    series: [
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
    series: [
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
    series: [
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

export const DashLineWithZoomIn: Story = {
  args: {
    xAxis: getDaysInMonth(8, 2026),
    series: [
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
    zoomable: true,
  },
};

export const TwoYAxis: Story = {
  args: {
    xAxis: getDaysInMonth(8, 2026),
    yAxes: [
      { id: 'revenue', label: 'Revenue ($)', position: 'left' },
      { id: 'conversionRate', label: 'Conversion rate (%)', position: 'right' },
    ],
    series: [
      {
        id: 'revenue',
        label: 'Revenue Company 1',
        curve: 'linear',
        stackId: 'revenue',
        stackOrder: 'ascending',
        yAxisId: 'revenue',
        data: [
          3000, 3200, 3100, 3400, 3600, 3800, 4000, 3900, 4200, 4400, 4300,
          4600, 4800, 5000, 5200, 5100, 5400, 5600, 5800, 6000, 5900, 6200,
          6400, 6600, 6800, 7000, 6900, 7200, 7400, 7600, 7800
        ],
      },
      {
        id: 'revenue2',
        label: 'Revenue Company 2',
        curve: 'linear',
        stackId: 'revenue2',
        stackOrder: 'ascending',
        yAxisId: 'revenue',
        data: [
          6000, 6200, 6100, 6400, 6600, 6800, 6000, 6900, 6200, 6400, 6300,
          5600, 5800, 5600, 5400, 5000, 4800, 4600, 4400, 4200, 4000, 3200,
          3400, 3600, 3800, 4000, 3900, 4200, 4400, 4600, 4800
        ],
      },
      {
        id: 'conversionRate',
        label: 'Conversion rate',
        curve: 'linear',
        stackId: 'conversionRate',
        stackOrder: 'ascending',
        yAxisId: 'conversionRate',
        data: [
          2.1, 2.3, 2.0, 2.4, 2.6, 2.5, 2.8, 2.7, 3.0, 3.2, 3.1, 3.4, 3.3,
          3.6, 3.5, 3.8, 3.7, 4.0, 3.9, 4.2, 4.1, 4.4, 4.3, 4.6, 4.5, 4.8,
          4.7, 5.0, 4.9, 5.2, 5.1
        ],
      },
    ],
    curveType: 'linear',
    areaUnderGraph: false,
  }
}