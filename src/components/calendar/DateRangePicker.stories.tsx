import type { Meta, StoryObj } from '@storybook/react-vite';
import dayjs, { Dayjs } from "dayjs";
import { type DateRange,DateRangeFilterButton } from './DateRangePicker';


const meta = {
  title: 'Components/Calendar/DateRangePicker',
  component: DateRangeFilterButton, 
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    label: "Pick a date range",
    value: { start: dayjs(), end: dayjs().add(7, 'day') },
    onChange: (newValue: DateRange) => {
      console.log(`newValue: ${newValue}`);
    }
  }
} satisfies Meta<typeof DateRangeFilterButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "",
    value: { start: dayjs().subtract(7, 'day'), end: dayjs() },
    onChange: (newValue: { start: Dayjs | null, end: Dayjs | null }) => {
      console.log(`newValue: ${newValue.start} - ${newValue.end}`);
    }
  }
};

export const Shortcuts: Story = {
  args: {
    label: "",
    value: { start: dayjs().subtract(7, 'day'), end: dayjs() },
    onChange: (newValue: { start: Dayjs | null, end: Dayjs | null }) => {
      console.log(`newValue: ${newValue.start} - ${newValue.end}`);
    },
    isShortcutVisible: true,
    shortcutsItems: [
      {
        label: 'This Week',
        getValue: () => {
          const today = dayjs();
          return { start: today.startOf('week'), end: today.endOf('week') };
        },
      },
      {
        label: 'Last Week',
        getValue: () => {
          const today = dayjs();
          const prevWeek = today.subtract(7, 'day');
          return { start: prevWeek.startOf('week'), end: prevWeek.endOf('week') };
        },
      },
      {
        label: 'Last 7 Days',
        getValue: () => {
          const today = dayjs();
          return { start: today.subtract(7, 'day'), end: today };
        },
      },
      {
        label: 'Current Month',
        getValue: () => {
          const today = dayjs();
          return { start: today.startOf('month'), end: today.endOf('month') };
        },
      },
      { label: 'Reset', getValue: () => ({ start: dayjs().subtract(7, 'day'), end: dayjs() }) },
    ]
  }
};