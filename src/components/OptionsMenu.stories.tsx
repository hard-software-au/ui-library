import type { Meta, StoryObj } from '@storybook/react-vite';
import OptionsMenu from './OptionsMenu';

const meta = {
  title: 'Components/OptionsMenu',
  component: OptionsMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof OptionsMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
