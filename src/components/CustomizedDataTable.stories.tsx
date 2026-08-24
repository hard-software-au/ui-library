import type { Meta, StoryObj } from '@storybook/react-vite';

import CustomizedDataTable from './CustomizedDataTable';

const meta = {
  title: 'Components/CustomizedDataTable',
  component: CustomizedDataTable,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof CustomizedDataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
