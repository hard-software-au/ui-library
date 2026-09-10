
import React, { useState } from "react";

import DateRangeIcon from "@mui/icons-material/DateRange";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'; // Or AdapterDateFns, AdapterMoment, etc.
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import type { PickerDayProps } from "@mui/x-date-pickers/PickerDay";
import { PickerDay } from "@mui/x-date-pickers/PickerDay";
import dayjs, { Dayjs } from "dayjs";

export interface DateRange {
  start: Dayjs | null;
  end: Dayjs | null;
}

export interface DateRangeFilterButtonProps {
  label: string;
  value: DateRange;
  isShortcutVisible?: boolean;
  onChange: (range: DateRange) => void;
}

export interface PickerShortcutsItem<DateRange> {
  label: string;
  getValue: () => DateRange;
}

interface RangeDayProps extends PickerDayProps {
  rangeStart: Dayjs | null;
  rangeEnd: Dayjs | null;
}
const shortcutsItems: PickerShortcutsItem<DateRange>[] = [
  {
    label: 'This Week',
    getValue: () => {
      const today = dayjs();
      return { start: today.startOf('week'), end: today.endOf('week') };
    },
  },
  {
    label: 'Last Week',
    getValue: () => {
      const today = dayjs();
      const prevWeek = today.subtract(7, 'day');
      return { start: prevWeek.startOf('week'), end: prevWeek.endOf('week') };
    },
  },
  {
    label: 'Last 7 Days',
    getValue: () => {
      const today = dayjs();
      return { start: today.subtract(7, 'day'), end: today };
    },
  },
  {
    label: 'Current Month',
    getValue: () => {
      const today = dayjs();
      return { start: today.startOf('month'), end: today.endOf('month') };
    },
  },
  {
    label: 'Next Month',
    getValue: () => {
      const today = dayjs();
      const startOfNextMonth = today.endOf('month').add(1, 'day');
      return { start: startOfNextMonth, end: startOfNextMonth.endOf('month') };
    },
  },
  { label: 'Reset', getValue: () => ({ start: dayjs(), end: dayjs().add(7, 'day') }) },
];


function RangeDay({ day, rangeStart, rangeEnd, ...other }: RangeDayProps) {
  const isStart = !!rangeStart && day.isSame(rangeStart, "day");
  const isEnd = !!rangeEnd && day.isSame(rangeEnd, "day");
  const inRange =
    !!rangeStart && !!rangeEnd && day.isAfter(rangeStart, "day") && day.isBefore(rangeEnd, "day");

  return (
    <PickerDay
      {...other}
      day={day}
      selected={isStart || isEnd}
      sx={{
        ...(inRange && {
          borderRadius: 0,
          backgroundColor: "action.selected",
        }),
        ...((isStart || isEnd) && {
          borderRadius: isStart && isEnd ? undefined : isStart ? "50% 0 0 50%" : "0 50% 50% 0",
        }),
      }}
    />
  );
}

export function DateRangeFilterButton({ label, value, onChange, isShortcutVisible }: DateRangeFilterButtonProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedRange, setSelectedRange] = useState<DateRange | null>(value);

  const buttonLabel =
    selectedRange?.start || selectedRange?.end
      ? `${selectedRange?.start ? dayjs(selectedRange.start).format("DD/MM/YYYY") : "…"} - ${
        selectedRange?.end ? dayjs(selectedRange.end).format("DD/MM/YYYY") : "…"
      }`
      : label;

  const handleDayClick = (day: Dayjs | null) => {
    if (!day) return;

    // If selection is empty, start a new range with the clicked day as the start date
    if (!selectedRange?.start && !selectedRange?.end) {
      setSelectedRange({ start: day, end: null });
      return;
    }
    // If clicked day is before the start date, update clicked day as the new start date
    if (selectedRange?.start && day.isBefore(selectedRange.start, "day")) {
      setSelectedRange({ start: day, end: selectedRange.start });
      return;
    }
    // If clicked day is after the start date and before the end date, update clicked day as the new end date
    if (selectedRange?.start && day.isAfter(selectedRange?.start, "day") && !day.isSame(selectedRange.end, "day")) {
      setSelectedRange({ start: selectedRange.start, end: day });
      return;
    }
    // If clicked day is the same as the start or end date, reset the selection to just that day
    if (selectedRange?.start && day.isSame(selectedRange.start, "day") || selectedRange?.end && day && day.isSame(selectedRange.end, "day")) {
      setSelectedRange({ start: day, end: null });
      return;
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>      
      <Button
        size="small"
        variant="outlined"
        startIcon={<DateRangeIcon />}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        {buttonLabel}
      </Button>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ width: '100%' }}>
          {isShortcutVisible && 
            <Box sx={{ p: 1 }}>
              <Stack direction="column" spacing={1} sx={{ mb: 1 }}>
                {shortcutsItems.map((item) => (
                  <Button
                    key={item.label}
                    size="small"
                    variant="outlined"
                    onClick={() => {
                      const newRange = item.getValue();
                      setSelectedRange(newRange);
                      onChange(newRange);
                      setAnchorEl(null);
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Stack>
            </Box>
          }

          <Box sx={{ p: 1 }}>
            <Typography variant="caption" color="text.secondary" sx={{ pl: 1 }}>
              Pick start date, then end date
            </Typography>
            {/* MUI's slot typing doesn't model extra custom props on `day`; RangeDay needs
                rangeStart/rangeEnd alongside the standard PickerDayProps, so these are cast loosely. */}
            <DateCalendar
              value={selectedRange?.end ?? selectedRange?.start ?? null}
              onChange={handleDayClick}
              {...({
                slots: { day: RangeDay, },
                slotProps: {
                  day: {
                    rangeStart: selectedRange?.start,
                    rangeEnd: selectedRange?.end,
                  },
                },
              } as Record<string, unknown>)}
            />
            <Stack direction="row" sx={{ justifyContent: "flex-end", px: 1, pb: 1 }}>
              <Button
                size="small"
                onClick={() => {
                  setSelectedRange({ start: null, end: null });
                  onChange({ start: null, end: null });
                }}
                disabled={!selectedRange?.start && !selectedRange?.end}
              >
                Clear
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Popover>

    </LocalizationProvider>
  );
}

