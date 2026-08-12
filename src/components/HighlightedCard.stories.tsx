import type { Meta, StoryObj } from '@storybook/react-vite';
import HighlightedCard from './HighlightedCard';

const meta = {
  title: 'Components/HighlightedCard',
  component: HighlightedCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof HighlightedCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
