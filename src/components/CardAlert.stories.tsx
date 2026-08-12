import type { Meta, StoryObj } from '@storybook/react-vite';
import CardAlert from './CardAlert';

const meta = {
  title: 'Components/CardAlert',
  component: CardAlert,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof CardAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
