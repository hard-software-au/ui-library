import type { Meta, StoryObj } from '@storybook/react-vite';

import ProgressBar from "./ProgressBar";

const meta = {
  title: 'Components/Progress/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Progress35: Story = {
  args: {
    value: 35,
    label: "Progress",
    color: "hsl(220, 25%, 20%)"
  }
}

export const Progress65: Story = {
  args: {
    value: 65,
    label: "Progress",
    color: "hsl(220, 25%, 20%)"
  }
}
