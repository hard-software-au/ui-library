import type { Meta, StoryObj } from '@storybook/react-vite';
import MenuContent from './MenuContent';

const meta = {
  title: 'Components/MenuContent',
  component: MenuContent,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof MenuContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
