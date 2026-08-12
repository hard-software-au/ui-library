import type { Meta, StoryObj } from '@storybook/react-vite';
import Copyright from './Copyright';

const meta = {
  title: 'Internals/Copyright',
  component: Copyright,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Copyright>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
