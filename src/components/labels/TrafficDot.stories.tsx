import type { Meta, StoryObj } from '@storybook/react-vite';

import TrafficDot from './TrafficDot';

const meta = {
  title: 'Components/Labels/TrafficDot',
  component: TrafficDot,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof TrafficDot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    status: "ok",
  }
};

export const Warning: Story = {
  args: {
    status: "warning",
  }
};

export const Error: Story = {
  args: {
    status: "error",
  }
};
