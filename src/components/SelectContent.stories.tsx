import type { Meta, StoryObj } from '@storybook/react-vite';
import SelectContent from './SelectContent';

const meta = {
  title: 'Components/SelectContent',
  component: SelectContent,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof SelectContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
