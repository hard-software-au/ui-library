import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";

export interface ProgressBarProps {
  value: number;
  label: string;
  color?: string;
}

export default function ProgressBar(props: ProgressBarProps) {
  return (
    <LinearProgress
      variant="determinate"
      aria-label={props.label}
      value={props.value}
      sx={{
        [`& .${linearProgressClasses.bar}`]: {
          backgroundColor: props.color ? props.color : "rgb(38, 47, 64)",
        },
      }}
    />
  )
}