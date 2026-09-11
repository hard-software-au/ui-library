import type { Meta, StoryObj } from '@storybook/react-vite';

import RegionLabel from './RegionLabel';

const meta = {
  title: 'Components/Labels/RegionLabel',
  component: RegionLabel,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof RegionLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    region: "QLD1",
  }
};

export const NSW1: Story = {
  args: {
    region: "NSW1",
  }
};

export const VIC1: Story = {
  args: {
    region: "VIC1",
  }
};

export const SA1: Story = {
  args: {
    region: "SA1",
  }
};
