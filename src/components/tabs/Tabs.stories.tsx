import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import Typography from '@mui/material/Typography';
import type { Meta, StoryObj } from '@storybook/react-vite';

import Tabs from './Tabs';

const meta = {
  title: 'Components/Tabs/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: [
      { label: 'Overview', content: <Typography>Overview content</Typography> },
      { label: 'Details', content: <Typography>Details content</Typography> },
      { label: 'Settings', content: <Typography>Settings content</Typography> },
    ],

    defaultValue: 1,
    variant: "standard"
  },
};

export const WithDisabledTab: Story = {
  args: {
    tabs: [
      { label: 'Overview', content: <Typography>Overview content</Typography> },
      { label: 'Details', content: <Typography>Details content</Typography> },
      { label: 'Archived', content: <Typography>Archived content</Typography>, disabled: true },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    tabs: [
      { label: 'Overview', content: <Typography>Overview content</Typography>, icon: <HomeIcon /> },
      { label: 'Details', content: <Typography>Details content</Typography>, icon: <InfoIcon /> },
      { label: 'Settings', content: <Typography>Settings content</Typography>, icon: <SettingsIcon /> },
    ],
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    tabs: [
      { label: 'Overview', content: <Typography>Overview content</Typography>, icon: <HomeIcon /> },
      { label: 'Details', content: <Typography>Details content</Typography>, icon: <InfoIcon /> },
      { label: 'Settings', content: <Typography>Settings content</Typography>, icon: <SettingsIcon /> },
    ],
  },
};

export const StartingOnSecondTab: Story = {
  args: {
    defaultValue: 1,
    tabs: [
      { label: 'Overview', content: <Typography>Overview content</Typography> },
      { label: 'Details', content: <Typography>Details content</Typography> },
      { label: 'Settings', content: <Typography>Settings content</Typography> },
    ],
  },
};
