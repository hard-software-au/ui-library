import { forwardRef } from "react";

import Paper, { type PaperProps } from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)(() => ({
  border: "0.01px solid #BCC8D2",
  background: "#fff",
}))

export const Tile = forwardRef<HTMLDivElement, PaperProps>(function Tile(
  { elevation = 2, ...props },
  ref,
) {
  return <StyledPaper
    ref={ref}
    elevation={elevation}
    {...props}
  />;
});
