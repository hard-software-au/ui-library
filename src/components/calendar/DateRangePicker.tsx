
import { useState } from "react";

import DateRangeIcon from "@mui/icons-material/DateRange";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import Stack from "@mui/material/Stack";
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
  shortcutsItems?: string[];
  onChange: (range: DateRange) => void;
}
interface RangeDayProps extends PickerDayProps {
  rangeStart: Dayjs | null;
  rangeEnd: Dayjs | null;
}

export const SHORTCUT_LABELS: Record<string, string> = {
  this_week: "This Week",
  last_week: "Last Week",
  last_7_days: "Last 7 Days",
  current_month: "Current Month",
  reset: "Reset",
};

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

export function DateRangeFilterButton({ label, value, onChange, shortcutsItems }: DateRangeFilterButtonProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedRange, setSelectedRange] = useState<DateRange | null>(value);
  const [originalRange] = useState<DateRange | null>(value);
  const { start, end } = selectedRange || { start: null, end: null };

  const buttonLabel =
    selectedRange?.start || selectedRange?.end
      ? `${selectedRange?.start ? dayjs(selectedRange.start).format("DD/MM/YYYY") : "…"} - ${
        selectedRange?.end ? dayjs(selectedRange.end).format("DD/MM/YYYY") : "…"
      }`
      : label;

  const handleDayClick = (day: Dayjs | null) => {
    if (!day) return;

    // Start a new range with the clicked day as the start date if selection is empty
    // Or reset the selection to the clicked day if it is the same as current start or end
    if (!start && !end ||
      (start && day.isSame(start, "day") || end && day.isSame(end, "day"))) {
      setSelectedRange({ start: day, end: null });
      return;
    }
    // Set clicked day as the new start date, if it is before the current start
    if (start && day.isBefore(start, "day")) {
      setSelectedRange({ start: day, end: end });
      return;
    }
    // Set clicked day as the new end date, if day is after start date
    if (start && day.isAfter(start, "day") && !day.isSame(end, "day")) {
      setSelectedRange({ start: start, end: day });
      return;
    }
  };

  const handleShortcut = (selection: string): DateRange => {
    const today = dayjs();
    const prevWeek = today.subtract(7, 'day');
    switch (selection) {
    case "this_week":
      return { start: today.startOf('week'), end: today.endOf('week') };
    case "last_week":
      return { start: prevWeek.startOf('week'), end: prevWeek.endOf('week') };
    case "last_7_days":
      return { start: today.subtract(7, 'day'), end: today };
    case "current_month":
      return { start: today.startOf('month'), end: today.endOf('month') };
    case "reset":
      return { start: originalRange?.start ? originalRange?.start : null , end: originalRange?.end ? originalRange?.end : null };
    default:
      return { start: null, end: null };
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
          {shortcutsItems && shortcutsItems.length > 0 &&
            <Box sx={{ p: 3 }}>
              <Stack direction="column" spacing={1} sx={{ mb: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                {shortcutsItems.map((item) => (
                  <Button
                    key={item}
                    size="small"
                    variant="outlined"
                    onClick={() => {
                      const newRange = handleShortcut(item);
                      setSelectedRange(newRange);
                      onChange(newRange);
                    }}
                  >
                    {SHORTCUT_LABELS[item]}
                  </Button>
                ))}
              </Stack>
            </Box>
          }
          <Box>
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

