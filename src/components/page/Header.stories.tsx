import type { Meta, StoryObj } from '@storybook/react-vite';

import Header from './Header';
import {Fragment} from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MenuButton from "../MenuButton.tsx";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import {ColorModeIconDropdown} from "../../lib/ColorModeIconDropdown.ts";

const meta = {
  title: 'Components/Page/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

const headerContent =
  <Fragment>
    <Typography
      variant="h4"
      sx={{
        color: "black",
        fontWeight: '600',
        ml: 1,
        whiteSpace: 'nowrap',
        lineHeight: 1,
      }}
    >
      Sites Overview
    </Typography>

    <Stack
      direction="row"
      spacing={2}
      sx={{ alignItems: 'center' }}
    >
      <Typography
        variant="body2"
        sx={{
          color: '#333333',
          fontFamily: 'monospace',
          fontSize: '0.9rem',
        }}
      >
        AEMO Time: 21-10-2026 15:58:55
      </Typography>

      <MenuButton showBadge aria-label="Open notifications">
        <NotificationsRoundedIcon />
      </MenuButton>
      <ColorModeIconDropdown />
    </Stack>
  </Fragment>

export const Default: Story = {
  args: {
    headerContent: headerContent
  }
};

