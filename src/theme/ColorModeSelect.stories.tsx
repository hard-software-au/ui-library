import type { Meta, StoryObj } from '@storybook/react-vite';
import ColorModeSelect from './ColorModeSelect';

const meta = {
  title: 'Theme/ColorModeSelect',
  component: ColorModeSelect,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ColorModeSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
