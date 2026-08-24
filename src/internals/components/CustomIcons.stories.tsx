import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  BrazilFlag,
  GlobeFlag,
  IndiaFlag,
  SitemarkIcon,
  UsaFlag,
} from './CustomIcons';

function IconGallery() {
  const icons = [
    { name: 'SitemarkIcon', Icon: SitemarkIcon },
    { name: 'IndiaFlag', Icon: IndiaFlag },
    { name: 'UsaFlag', Icon: UsaFlag },
    { name: 'BrazilFlag', Icon: BrazilFlag },
    { name: 'GlobeFlag', Icon: GlobeFlag },
  ];
  return (
    <Stack direction="row" spacing={4} sx={{ flexWrap: 'wrap' }}>
      {icons.map(({ name, Icon }) => (
        <Stack key={name} spacing={1} sx={{ alignItems: 'center' }}>
          <Icon />
          <Typography variant="caption">{name}</Typography>
        </Stack>
      ))}
    </Stack>
  );
}

const meta = {
  title: 'Internals/CustomIcons',
  component: IconGallery,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof IconGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Gallery: Story = {};
