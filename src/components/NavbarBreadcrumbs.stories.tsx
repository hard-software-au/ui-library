import type { Meta, StoryObj } from '@storybook/react-vite';
import NavbarBreadcrumbs from './NavbarBreadcrumbs';

const meta = {
  title: 'Components/NavbarBreadcrumbs',
  component: NavbarBreadcrumbs,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof NavbarBreadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
