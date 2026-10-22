import type { JSX } from "react";

import type { SxProps, Theme } from "@mui/material";
import { Paper } from "@mui/material";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const StyledStack = styled(Stack)(() => ({
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
}));

const StyledPaper = styled(Paper)(() => ({
  borderRadius: 0, // Resets all corners first
  borderBottomLeftRadius: '8px',

  width: '100%',
  height: '64px',
  padding: '0.5rem',
  alignContent: 'center',

  backgroundColor: "white",
  color: "black",
}))

interface HeaderProps {
  headerContent: JSX.Element;
  sx?: SxProps<Theme>;
}

export default function Header({ headerContent, sx }: HeaderProps) {
  return (
    <StyledPaper elevation={2} sx={sx}>
      <StyledStack
        direction="row"
      >
        {headerContent}
      </StyledStack>
    </StyledPaper>
  );
}
