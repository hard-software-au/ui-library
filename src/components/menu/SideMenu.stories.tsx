import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import type { Meta, StoryObj } from '@storybook/react-vite';

import SideMenu from './SideMenu';

const meta = {
  title: 'Components/Menu/SideMenu',
  component: SideMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SideMenu>;

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
    userName: 'Rahmat Hidayah'
  }
};

export const DesktopMinimised: Story = {
  args: {
    items: mainListItems,
    isExpanded: false,
    userName: 'Rahmat Hidayah'
  }
};
