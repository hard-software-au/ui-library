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
    pulseOnCritical: false
  }
};

export const Warning: Story = {
  args: {
    status: "warning",
    pulseOnCritical: false,
  }
};

export const WarningPulse: Story = {
  args: {
    status: "warning",
    pulseOnCritical: true,
  }
};

export const Error: Story = {
  args: {
    status: "error",
    pulseOnCritical: false
  }
};

export const ErrorPulse: Story = {
  args: {
    status: "error",
    pulseOnCritical: true
  }
};
