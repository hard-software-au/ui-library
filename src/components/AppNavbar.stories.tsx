import type { Meta, StoryObj } from '@storybook/react-vite';
import AppNavbar from './AppNavbar';

const meta = {
  title: 'Components/AppNavbar',
  component: AppNavbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
} satisfies Meta<typeof AppNavbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
