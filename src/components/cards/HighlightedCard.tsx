import type { ReactNode } from "react";

import CardContent from '@mui/material/CardContent';
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';

import type { CardProps } from "./CardProps.ts";
import { Tile } from "./Tile.tsx";

export interface HighlightedCardProps extends CardProps {
  prefix?: ReactNode;
}

export default function HighlightedCard(props: HighlightedCardProps) {
  return (
    <Tile sx={{ padding: '1rem', height: '100%', flexGrow: 1, backgroundColor: "#f5f6fa" }}>
      <CardContent>
        {props.prefix && (props.prefix)}
        <Typography
          component="h2"
          variant="subtitle2"
          gutterBottom
          sx={{ fontWeight: '600' }}
        >
          {props.title}
        </Typography>
        <Stack sx={{ justifyContent: 'space-between' }}>
          {props.summary && (<Stack
            direction="row"
            sx={{
              alignContent: { xs: 'center', sm: 'flex-start' },
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Typography variant="h4" component="p">
              {props.summary}
            </Typography>
            {props.label && <Chip size="small" color="error" label={props.label} />}
          </Stack>)}
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            {props.description}
          </Typography>
        </Stack>
        {/*<Grid container sx={{ mt: "8px" }}>*/}
        {/*  <Button*/}
        {/*    variant="contained"*/}
        {/*    size="small"*/}
        {/*    color="primary"*/}
        {/*    endIcon={<ChevronRightRoundedIcon />}*/}
        {/*    fullWidth={isSmallScreen}*/}
        {/*  >*/}
        {/*    Get insights*/}
        {/*  </Button>*/}
        {/*</Grid>*/}
      </CardContent>
    </Tile>
  );
}
