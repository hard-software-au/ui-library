import type { Meta, StoryObj } from '@storybook/react-vite';

import MainGrid from './MainGrid';

const meta = {
  title: 'Components/MainGrid',
  component: MainGrid,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MainGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
