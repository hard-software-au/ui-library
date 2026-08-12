import type { Meta, StoryObj } from '@storybook/react-vite';
import SideMenuMobile from './SideMenuMobile';

const meta = {
  title: 'Components/SideMenuMobile',
  component: SideMenuMobile,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    open: true,
    toggleDrawer: () => () => {},
  },
} satisfies Meta<typeof SideMenuMobile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {};

export const Closed: Story = {
  args: {
    open: false,
  },
};
