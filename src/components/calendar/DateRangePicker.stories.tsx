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
    value: { start: dayjs(), end: dayjs().add(7, 'day') },
    onChange: (newValue: DateRange) => {
      console.log(`newValue: ${newValue}`);
    }
  }
};

export const Shortcuts: Story = {
  args: {
    label: "",
    value: { start: dayjs(), end: dayjs().add(7, 'day') },
    onChange: (newValue: DateRange) => {
      console.log(`newValue: ${newValue}`);
    }
  }
};