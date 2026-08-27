import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import type { Meta, StoryObj } from '@storybook/react-vite';

import HighlightedCard from './HighlightedCard';

const meta = {
  title: 'Components/Cards/HighlightedCard',
  component: HighlightedCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof HighlightedCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const prefixContent = <InsightsRoundedIcon />
export const Default: Story = {
  args: {
    title: "Explore your data",
    description: "Uncover performance and visitor insights with our data wizardry.",
    prefix: prefixContent
  }
};
