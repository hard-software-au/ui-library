import * as React from 'react';

import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider, { dividerClasses } from '@mui/material/Divider';
import { listClasses } from '@mui/material/List';
import ListItemIcon, { listItemIconClasses } from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MuiMenuItem from '@mui/material/MenuItem';
import { paperClasses } from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from "@mui/material/Typography";

import MenuButton from "../MenuButton.tsx";

const MenuItem = styled(MuiMenuItem)({
  margin: '2px 0',
});

export default function AccountMenu({ userName }: {userName: string}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <MenuButton
        aria-label="Open menu"
        onClick={handleClick}
        sx={{ borderColor: 'transparent' }}
      >
        <Avatar
          sizes="small"
          alt={userName}
          src="/static/images/avatar/7.jpg"
          sx={{ width: 45, height: 45 }}
        />
      </MenuButton>
      <Menu
        anchorEl={anchorEl}
        id="accountMenu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        sx={{
          [`& .${listClasses.root}`]: {
            padding: '4px',
          },
          [`& .${paperClasses.root}`]: {
            padding: 0,
          },
          [`& .${dividerClasses.root}`]: {
            margin: '4px -4px',
          },
        }}
      >
        <Box
          sx={{
            mr: 'auto',
            px: 0.5,
            py: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 500, lineHeight: '16px' }}>
            {userName}
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            user@hardsoftware.com
          </Typography>
        </Box>
        <Divider />
        <MenuItem
          onClick={handleClose}
          sx={{
            [`& .${listItemIconClasses.root}`]: {
              ml: 'auto',
              minWidth: 0,
            },
          }}
        >
          <ListItemText>Logout</ListItemText>
          <ListItemIcon>
            <LogoutRoundedIcon fontSize="small" />
          </ListItemIcon>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
