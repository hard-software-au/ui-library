import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import type { Meta, StoryObj } from '@storybook/react-vite';

import MenuItemButton from "./MenuItemButton.tsx";

const meta = {
  title: 'Components/Menu/MenuItemButton',
  component: MenuItemButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof MenuItemButton>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    icon: <AnalyticsRoundedIcon />,
    text: "Reports",
    isExpanded: true,
    isSelected: false
  }
};

export const SelectedMenuItem: Story = {
  args: {
    icon: <AnalyticsRoundedIcon />,
    text: "Reports",
    isExpanded: true,
    isSelected: true
  }
}

export const MinimisedMenuItem: Story = {
  args: {
    icon: <AnalyticsRoundedIcon />,
    text: "Reports",
    isExpanded: false,
    isSelected: true
  }
}

