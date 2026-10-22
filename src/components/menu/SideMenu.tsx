import type { JSX } from "react";

import Box from "@mui/material/Box";
import Divider from '@mui/material/Divider';
import MuiDrawer, { drawerClasses } from '@mui/material/Drawer';
import Stack from "@mui/material/Stack";
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import HSIcon from "./../../assets/hs_icon.png";
import HSLogo from "./../../assets/hs_logo.png";
import AccountMenu from "./AccountMenu.tsx";
import MenuItems, { type MenuItemProps } from "./MenuItems.tsx";

const drawerWidthExpanded = 110;
const drawerWidthMinimised = 80;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "isSelected",
})<{ isExpanded: boolean }>(({ isExpanded }) => ({
  height: '100%',
  width: isExpanded ? drawerWidthExpanded : drawerWidthMinimised,
  flexShrink: 0,
  boxSizing: 'border-box',
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: isExpanded ? drawerWidthExpanded : drawerWidthMinimised,
    boxSizing: 'border-box',
  },
}));

const HSLogoHeader = <img src={HSLogo} alt={'HS Logo'} width={drawerWidthExpanded - 40}/>;
const HSIconHeader = <img src={HSIcon} alt={'HS Icon'} width={50}/>;

interface SideMenuProps {
  items: MenuItemProps[];
  isExpanded: boolean;
  userName: string;
}

export default function SideMenu({ items, isExpanded, userName }: SideMenuProps): JSX.Element {
  const theme = useTheme();
  const isBigScreen = useMediaQuery(theme.breakpoints.up('sm'));
  const showExpandedHeader = isBigScreen && isExpanded;

  return (
    <Drawer
      variant={'permanent'}
      isExpanded={showExpandedHeader && isExpanded}
      sx={{
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: "#062b57"
        },
      }}
    >
      <Box
        sx={{
          height: '66px',
          display: 'flex',
          justifyContent: 'center',
          mt: 'calc(var(--template-frame-height, 0px) + 4px)',
          p: 1,
          backgroundColor: "inherit"
        }}
      >
        {
          showExpandedHeader ? HSLogoHeader : HSIconHeader
        }
      </Box>
      <Divider />

      <MenuItems items={items} isExpanded={showExpandedHeader && isExpanded} isMobile={false} />

      <Stack
        direction="row"
        sx={{
          p: 2,
          gap: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <AccountMenu userName={userName}/>
      </Stack>
    </Drawer>
  );
}
