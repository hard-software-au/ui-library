import type { JSX } from "react";

import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

import MenuItemButton from "./MenuItemButton.tsx";

export interface MenuItemProps {
  icon: JSX.Element;
  text: string;
  isSelected?: boolean;
}

interface MenuItemsProps {
  items: MenuItemProps[];
  isExpanded: boolean;
  isMobile: boolean;
}

const StyledMenuItems = styled(Stack, {
  shouldForwardProp: (prop) => prop !== "isExpanded",
})(() => ({
  flexGrow: 1,
}));

export default function MenuItems({ items, isExpanded, isMobile }: MenuItemsProps) {
  return (
    <StyledMenuItems id={"menuSidebar"} >
      {items.map((item, index) => (
        <Stack direction={"column"} key={index} sx={{ display: 'block' }}>
          <MenuItemButton icon={item.icon} text={item.text} isExpanded={isMobile || isExpanded} isSelected={!!item.isSelected} />
        </Stack>
      ))}
    </StyledMenuItems>
  )
}
