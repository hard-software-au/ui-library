import {useLayoutEffect, useRef, useState} from "react";

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { Autocomplete, TextField } from '@mui/material';
import type { AutocompleteRenderValueGetItemProps } from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import ListItemText from '@mui/material/ListItemText';

import type { SxProps, Theme } from '@mui/material/styles';
import { gray } from '../../theme/themePrimitives';

export interface SelectOption {
  label: string;
  value: string;
}

export interface ComboboxProps {
  options: SelectOption[];
  multiple?: boolean;
  truncateTags?: boolean;
  placeholder?: string;
  onChange?: (value: string | string[]) => void;
  fullWidth?: boolean;
  sx?: SxProps<Theme>;
}

const OVERFLOW_CHIP_WIDTH = 120;
const TAG_GAP = 4;

function TruncatedTags({
                         options,
                         getItemProps,
                       }: {
  options: SelectOption[];
  getItemProps: AutocompleteRenderValueGetItemProps<true>;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleCount, setVisibleCount] = useState(options.length);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return undefined;
    }

    // The native input shares the same grid cell as the rendered value in
    // this Autocomplete, so it must be collapsed to avoid covering the chips.
    const input = container.parentElement?.querySelector<HTMLInputElement>(
      '.MuiAutocomplete-input',
    );
    if (input) {
      if (options.length > 0) {
        input.style.width = '0px';
        input.style.minWidth = '0px';
        input.style.flex = '0 1 0px';
      } else {
        input.style.width = '';
        input.style.minWidth = '';
        input.style.flex = '';
      }
    }

    const recalc = () => {
      const available = container.clientWidth;
      let used = 0;
      let count = 0;

      for (let i = 0; i < options.length; i += 1) {
        const el = measureRefs.current[i];
        if (!el) break;

        const width = el.getBoundingClientRect().width + TAG_GAP;
        const hasMoreAfter = i < options.length - 1;
        const reserve = hasMoreAfter ? OVERFLOW_CHIP_WIDTH : 0;

        if (used + width > available - reserve) break;

        used += width;
        count += 1;
      }

      setVisibleCount(Math.max(count, options.length > 0 ? 1 : 0));
    };

    recalc();

    const observer = new ResizeObserver(recalc);
    observer.observe(container);
    return () => observer.disconnect();
  }, [options]);

  const hiddenCount = options.length - visibleCount;

  return (
    <Box
      ref={containerRef}
      sx={{
        display: 'flex',
        flex: '1 1 0%',
        flexWrap: 'nowrap',
        overflow: 'hidden',
        gap: `${TAG_GAP}px`,
        minWidth: 0,
      }}
    >
      <Box sx={{ position: 'absolute', visibility: 'hidden', overflow: 'hidden', height: 0 }}>
        <Box sx={{ display: 'flex', gap: `${TAG_GAP}px` }}>
          {options.map((option, index) => (
            <Box
              key={option.value}
              ref={(el: HTMLDivElement | null) => {
                measureRefs.current[index] = el;
              }}
            >
              <Chip label={option.label} size="medium" />
            </Box>
          ))}
        </Box>
      </Box>
      {options.map((option, index) => {
        if (index >= visibleCount) return null;
        const { key, ...itemProps } = getItemProps({ index });
        return <Chip key={key} label={option.label} size="medium" {...itemProps} />;
      })}
      {hiddenCount > 0 ? (
        <Chip label={`and ${hiddenCount} other${hiddenCount > 1 ? 's' : ''}`} size="medium" />
      ) : null}
    </Box>
  );
}

export default function Combobox({
                                      options,
                                      multiple = false,
                                      truncateTags = false,
                                      placeholder,
                                      onChange,
                                      fullWidth = true,
                                      sx,
                                    }: ComboboxProps) {
  return (
    <Autocomplete
      disablePortal
      multiple={multiple}
      disableCloseOnSelect={multiple}
      openOnFocus
      renderValue={
        multiple && truncateTags
          ? (value, getItemProps) => (
            <TruncatedTags
              options={value as SelectOption[]}
              getItemProps={getItemProps as AutocompleteRenderValueGetItemProps<true>}
            />
          )
          : undefined
      }
      options={options}
      fullWidth={fullWidth}
      onChange={(_event, newValue) => {
        if (multiple) {
          onChange?.((newValue as SelectOption[]).map((option) => option.value));
        } else {
          onChange?.((newValue as SelectOption | null)?.value ?? '');
        }
      }}
      sx={{
        ...(!fullWidth && { width: 300 }),
        '& .MuiAutocomplete-popupIndicator, & .MuiAutocomplete-clearIndicator': {
          border: 'none',
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
        '& .MuiOutlinedInput-root': {
          width: '100%',
          height: 'auto',
          minHeight: '2.5rem',
          paddingTop: '4px',
          paddingBottom: '4px',
          ...(multiple && truncateTags && { flexWrap: 'nowrap' }),
        },
        '& .MuiOutlinedInput-root .MuiAutocomplete-input': {
          padding: 0,
        },
        '& .MuiAutocomplete-inputRoot': {
          gap: `${TAG_GAP}px`,
        },
        '& .MuiChip-root': {
          backgroundColor: 'transparent',
          borderRadius: '8px',
          margin: '0px',
        },
        ...sx,
      }}
      slotProps={{
        paper: {
          sx: (theme) => ({
            marginTop: '8px',
            border: '1px solid var(--template-palette-divider)',
            backgroundColor: 'hsl(0, 0%, 100%)',
            ...theme.applyStyles('dark', {
              backgroundColor: gray[900],
            }),
          }),
        },
      }}
      renderOption={(optionProps, option, { selected }) => {
        const { key, ...rest } = optionProps;
        return (
          <Box
            key={key}
            component="li"
            {...rest}
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <ListItemText primary={option.label} />
            {selected ? <CheckRoundedIcon sx={{ fontSize: 18, ml: 1 }} /> : null}
          </Box>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={placeholder}
          sx={{ minHeight: '42px' }}
        />
      )}
    />
  );
}
