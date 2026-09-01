import { useState } from 'react';

import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import Button from '@mui/material/Button';
import { useForkRef } from '@mui/material/utils';
import {
  useParsedFormat,
  usePickerContext,
  useSplitFieldProps,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, type DatePickerFieldProps } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';

function ButtonField(props: DatePickerFieldProps) {
  const { forwardedProps: allForwardedProps } = useSplitFieldProps(props, 'date');
  const {
    ...forwardedProps
  } = allForwardedProps as typeof allForwardedProps;
  const pickerContext = usePickerContext();
  const handleRef = useForkRef(pickerContext.triggerRef, pickerContext.rootRef);
  const parsedFormat = useParsedFormat();
  const valueStr =
    pickerContext.value == null
      ? parsedFormat
      : pickerContext.value.format(pickerContext.fieldFormat);

  return (
    <Button
      {...forwardedProps}
      variant="outlined"
      ref={handleRef}
      size="small"
      startIcon={<CalendarTodayRoundedIcon fontSize="small" />}
      sx={{ minWidth: 'fit-content' }}
      onClick={() => pickerContext.setOpen((prev) => !prev)}
    >
      {pickerContext.label ?? valueStr}
    </Button>
  );
}

export interface DatePickerProps {
  date?: string;
  onChange: (pickedDate: string) => void;
}

const DATE_FORMAT = "DD MMM YYYY"

export default function CustomDatePicker(props: DatePickerProps) {
  const [value, setValue] = useState<Dayjs | null>(props.date ? dayjs(props.date) : null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={value}
        openTo={'day'}
        label={value == null ? null : value.format(DATE_FORMAT)}
        closeOnSelect={true}
        onChange={(newValue) => {
          setValue(newValue)
          if (newValue) props.onChange(newValue.format(DATE_FORMAT))
        }}
        slots={{ field: ButtonField }}
        slotProps={{
          nextIconButton: { size: 'small' },
          previousIconButton: { size: 'small' },
        }}
        views={['day', 'month', 'year']}
      />
    </LocalizationProvider>
  );
}
