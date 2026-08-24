import type { Meta, StoryObj } from '@storybook/react-vite';

import CustomizedTreeView from './CustomizedTreeView';

const meta = {
  title: 'Components/CustomizedTreeView',
  component: CustomizedTreeView,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof CustomizedTreeView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
