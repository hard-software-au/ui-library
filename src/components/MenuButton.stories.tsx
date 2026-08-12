import type { Meta, StoryObj } from '@storybook/react-vite';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import MenuButton from './MenuButton';

const meta = {
  title: 'Components/MenuButton',
  component: MenuButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    showBadge: false,
    children: <NotificationsRoundedIcon />,
  },
} satisfies Meta<typeof MenuButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithBadge: Story = {
  args: {
    showBadge: true,
  },
};
