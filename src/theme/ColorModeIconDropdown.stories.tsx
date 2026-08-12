import type { Meta, StoryObj } from '@storybook/react-vite';
import ColorModeIconDropdown from './ColorModeIconDropdown';

const meta = {
  title: 'Theme/ColorModeIconDropdown',
  component: ColorModeIconDropdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ColorModeIconDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
