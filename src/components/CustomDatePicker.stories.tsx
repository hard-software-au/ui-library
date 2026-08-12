import type { Meta, StoryObj } from '@storybook/react-vite';
import CustomDatePicker from './CustomDatePicker';

const meta = {
  title: 'Components/CustomDatePicker',
  component: CustomDatePicker,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof CustomDatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
