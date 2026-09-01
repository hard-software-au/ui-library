import type { Meta, StoryObj } from '@storybook/react-vite';

import CustomDatePicker from './CustomDatePicker';

const meta = {
  title: 'Components/Calendar/CustomDatePicker',
  component: CustomDatePicker,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    date: "2026-08-28",
    onChange: (newValue: string) => {
      console.log(`newValue: ${newValue}`);
    }
  }
} satisfies Meta<typeof CustomDatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onChange: (newValue: string) => {
      console.log(`newValue: ${newValue}`);
    }
  }
};
