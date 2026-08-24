import type { Meta, StoryObj } from '@storybook/react-vite';

import SideMenu from './SideMenu';

const meta = {
  title: 'Components/SideMenu',
  component: SideMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SideMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
