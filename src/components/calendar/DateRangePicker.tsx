
import React, { useState } from "react";

import DateRangeIcon from "@mui/icons-material/DateRange";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'; // Or AdapterDateFns, AdapterMoment, etc.
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DatePicker, type DatePickerFieldProps } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import type { PickerDayProps } from "@mui/x-date-pickers/PickerDay";
import { PickerDay } from "@mui/x-date-pickers/PickerDay";
import { type PickersShortcutsItem } from '@mui/x-date-pickers/PickersShortcuts';
import dayjs, { Dayjs } from "dayjs";

export interface DateRange {
  start: Dayjs | null;
  end: Dayjs | null;
}

export interface DateRangeFilterButtonProps {
  label: string;
  value: DateRange;
  onChange: (range: DateRange) => void;
}

interface RangeDayProps extends PickerDayProps {
  rangeStart: Dayjs | null;
  rangeEnd: Dayjs | null;
}

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

export function DateRangeFilterButton({ label, value, onChange }: DateRangeFilterButtonProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedRange, setSelectedRange] = useState<DateRange | null>(value);

  const buttonLabel =
    selectedRange?.start || selectedRange?.end
      ? `${selectedRange?.start ? dayjs(selectedRange.start).format("DD/MM/YYYY") : "…"} - ${
        selectedRange?.end ? dayjs(selectedRange.end).format("DD/MM/YYYY") : "…"
      }`
      : label;

  const handleDayClick = (day: Dayjs | null) => {
    if (!selectedRange?.start && !selectedRange?.end && day) {
      setSelectedRange({ start: day, end: null });
      onChange({ start: day, end: null });
      return;
    }
    if (selectedRange?.start && day && day.isBefore(selectedRange.start, "day")) {
      setSelectedRange({ start: day, end: selectedRange.start });
      onChange({ start: day, end: selectedRange.start });
      return;
    }
    if (selectedRange?.start && day && day.isAfter(selectedRange?.start, "day") && !day.isSame(selectedRange.end, "day")) {
      setSelectedRange({ start: selectedRange.start, end: day });
      onChange({ start: selectedRange.start, end: day });
      return;
    }
    if (selectedRange?.start && day && day.isSame(selectedRange.start, "day") || selectedRange?.end && day && day.isSame(selectedRange.end, "day")) {
      setSelectedRange({ start: day, end: null });
      onChange({ start: day, end: null });
      return;
    }
    if (!day) return;
    if (!value.start || (value.start && value.end)) {
      onChange({ start: day, end: null });
      return;
    }
    if (day.isBefore(value.start, "day")) {
      onChange({ start: day, end: value.start });

    } else {
      onChange({ start: value.start, end: day });
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
      </Popover>

    </LocalizationProvider>
  );
}

