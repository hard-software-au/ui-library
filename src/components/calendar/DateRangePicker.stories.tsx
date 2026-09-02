import type { Meta, StoryObj } from '@storybook/react-vite';
import {DateRangeFilterButton, type DateRange} from './DateRangePicker';
import dayjs, { Dayjs } from "dayjs";


const meta = {
  title: 'Components/Calendar/DateRangePicker',
  component: DateRangeFilterButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    label: "Pick a date range",
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
    value: { start: dayjs('2026-09-02'), end: dayjs('2026-09-09') },
    onChange: (newValue: DateRange) => {
      console.log(`newValue: ${newValue}`);
    }
  }
};
