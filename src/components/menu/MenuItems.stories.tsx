import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import type { Meta, StoryObj } from '@storybook/react-vite';

import MenuItems from './MenuItems';

const meta = {
  title: 'Components/Menu/MenuItems',
  component: MenuItems,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof MenuItems>;

export default meta;
type Story = StoryObj<typeof meta>;

const mainListItems = [
  { text: 'Home', icon: <HomeRoundedIcon /> },
  { text: 'Analytics', icon: <AnalyticsRoundedIcon />, isSelected: true },
  { text: 'Clients', icon: <PeopleRoundedIcon /> },
  { text: 'Tasks', icon: <AssignmentRoundedIcon /> },
];

export const DesktopExpanded: Story = {
  args: {
    items: mainListItems,
    isExpanded: true,
    isMobile: false,
  }
};

export const DesktopMinimised: Story = {
  args: {
    items: mainListItems,
    isExpanded: false,
    isMobile: false,
  }
};

export const Mobile: Story = {
  args: {
    items: mainListItems,
    isExpanded: true,
    isMobile: true,
  }
};
