import type { Meta, StoryObj } from '@storybook/react-vite';
import CustomizedDataGrid from './CustomizedDataGrid';

const meta = {
  title: 'Components/CustomizedDataGrid',
  component: CustomizedDataGrid,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof CustomizedDataGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
