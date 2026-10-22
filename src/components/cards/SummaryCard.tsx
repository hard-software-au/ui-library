import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Grid from "@mui/material/Grid";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import type { CardProps } from "./CardProps.ts";
import { Tile } from "./Tile.tsx";

export default function SummaryCard(props: CardProps) {
  return (
    <Tile sx={{ padding: '1rem', height: '100%', flexGrow: 1 }}>
      <CardContent>
        <Grid container spacing={1} size={1}>
          <Stack sx={{ justifyContent: 'space-between' }}>
            <Typography
              component="h2"
              variant="subtitle2"
              gutterBottom
              sx={{ fontWeight: '600' }}
            >
              {props.title}
            </Typography>
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
        </Grid>
      </CardContent>
    </Tile>
  );
}








