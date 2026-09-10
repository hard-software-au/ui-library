import React, { useState } from 'react';

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import MuiTab, { tabClasses } from '@mui/material/Tab';
import MuiTabs, { tabsClasses } from '@mui/material/Tabs';

const OutlinedTab = styled(MuiTab)(({ theme }) => ({
  '&:hover': {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  [`&.${tabClasses.selected}`]: {
    borderLeft: `1px solid ${theme.palette.divider}`,
    borderTop: `1px solid ${theme.palette.divider}`,
    borderRight: `1px solid ${theme.palette.divider}`,
    borderBottom: `1px solid white`,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
}));

const StandardTabs = styled(MuiTabs)({
  [`& .${tabClasses.root}`]: {
    minHeight: '38px',
    marginBottom: '0',
  },
})

const OutlinedTabs = styled(MuiTabs)({
  minHeight: '38px',
  // MuiTabs-root itself defaults to overflow: hidden too (a separate rule from
  // the scroller's below). Since the selected tab's marginBottom: -1px makes
  // its border-box extend 1px past the root's own box on purpose (to reach
  // tabs-box's border), this clips that sliver — bottom border included —
  // before it ever gets there. That's why the border looked like it was
  // "behind" tabs-box's line: it was actually being cut off, not painted
  // underneath.
  overflow: 'visible',
  [`& .${tabsClasses.indicator}`]: {
    display: 'none',
  },
  // MuiTabs sets the scroller's overflow via an inline style (React state),
  // which beats a normal sx rule regardless of specificity — !important is
  // required to win. Without this, the scroller clips off the selected tab's
  // marginBottom: -1px overlap (and its border) before it reaches tabs-box's
  // border, making the border invisible.
  [`& .${tabsClasses.scroller}`]: {
    overflow: 'visible !important',
  },
  [`& .${tabClasses.root}`]: {
    minHeight: '39px',
    marginBottom: '-1px',
  },
});


export interface TabItem {
  label: string;
  content: React.ReactNode;
  icon?: React.ReactElement;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: TabItem[];
  defaultValue?: number;
  variant?: 'standard' | 'outline';
}

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

interface CustomTabProps {
  variant: 'standard' | 'outline';
  tabs: TabItem[];
  value: number;
  onChange: (_event: React.SyntheticEvent, newValue: number) => void;
}

function CustomTab({ variant, tabs, value, onChange }: CustomTabProps) {
  const outline = variant === 'outline';
  const TabsComponent = outline ? OutlinedTabs : StandardTabs;
  const TabComponent = outline ? OutlinedTab : MuiTab;

  return (
    <TabsComponent value={value} onChange={onChange}>
      {tabs.map((tab, index) => (
        <TabComponent
          key={tab.label}
          label={tab.label}
          icon={tab.icon}
          iconPosition="start"
          disabled={tab.disabled}
          {...a11yProps(index)}
        />
      ))}
    </TabsComponent>
  )
}

export default function Tabs({ tabs, defaultValue = 0, variant = 'standard' }: TabsProps) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box className={'tabs-box'} sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <CustomTab variant={variant} tabs={tabs} value={value} onChange={handleChange} />
      </Box>
      {tabs.map((tab, index) => (
        <Box
          key={tab.label}
          role="tabpanel"
          hidden={value !== index}
          id={`tabpanel-${index}`}
          aria-labelledby={`tab-${index}`}
          sx={{ py: 2 }}
        >
          {tab.content}
        </Box>
      ))}
    </Box>
  )
}
