import type { JSX } from "react";

import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import Box from "@mui/material/Box";
import Divider from '@mui/material/Divider';
import MuiDrawer, { drawerClasses } from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';

import HSIcon from "./../../assets/hs_icon.png";
import HSLogo from "./../../assets/hs_logo.png";
import MenuItems from "./MenuItems.tsx";

const drawerWidthExpanded = 150;
const drawerWidthMinimised = 100;

const mainListItems = [
  { text: 'Home', icon: <HomeRoundedIcon /> },
  { text: 'Analytics', icon: <AnalyticsRoundedIcon />, isSelected: true },
  { text: 'Clients', icon: <PeopleRoundedIcon /> },
  { text: 'Tasks', icon: <AssignmentRoundedIcon /> },
];

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

export default function SideMenu({ isExpanded }: {isExpanded: boolean}): JSX.Element {
  return (
    <Drawer
      variant={'permanent'}
      isExpanded={isExpanded}
      sx={{
        display: { xs: 'none', md: 'block' },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: "#062b57"
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 'calc(var(--template-frame-height, 0px) + 4px)',
          p: 1,
          backgroundColor: "inherit"
        }}
      >
        {
          isExpanded ?
            <img src={HSLogo} alt={'HS Logo'} width={drawerWidthExpanded}/> :
            <img src={HSIcon} alt={'HS Icon'} width={50}/>
        }
      </Box>
      <Divider />

      <MenuItems items={mainListItems} isExpanded={isExpanded} isMobile={false} />
    </Drawer>
  );
}
