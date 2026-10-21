import type { JSX } from "react";

import Button from "@mui/material/Button";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";

const StyledListItemButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "isSelected",
})<{ isSelected: boolean }>(({ isSelected }) => ({
  width: '100%',
  // width: '105px',
  height: '63px',
  borderRadius: '0 !important',
  backgroundColor: isSelected ? "#195aa6 !important" : "#062b57 !important",

  padding: '5px 20px',
  display: 'flex',
  alignItems: 'center',
  alignContent: 'center',
  gap: '8px',

  color: 'white !important',

  opacity: 1,
  transition: 'opacity 0.3s ease',

  ":hover": {
    backgroundColor: isSelected ? "#195aa6 !important" : "#062b57 !important",
    opacity: isSelected ? 1 : 0.6,
  }
}));

interface MenuItemProps {
  icon: JSX.Element;
  text: string;
  isExpanded: boolean;
  isSelected: boolean;
}

export default function MenuItemButton({ icon, text, isExpanded = false, isSelected = false }: MenuItemProps) {
  return (
    <StyledListItemButton isSelected={isSelected}>
      <ListItemIcon style={{ color: "white" }}>{icon}</ListItemIcon>
      {isExpanded && <ListItemText primary={text} sx={{ maxWidth: '100px', textAlign: 'left' }}/>}
    </StyledListItemButton>
  )
}
