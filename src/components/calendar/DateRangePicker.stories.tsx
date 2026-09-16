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
    label: "Pick a range",
    value: { start: dayjs().subtract(3, 'day'), end: dayjs().add(2, 'day') },
    onChange: (newValue: { start: Dayjs | null, end: Dayjs | null }) => {
      console.log(`newValue: ${newValue.start} - ${newValue.end}`);
    },
    shortcutsItems: ['this_week', 'last_week', 'last_7_days', 'current_month', 'reset']
  }
}
