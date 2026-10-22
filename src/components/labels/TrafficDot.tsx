import { Box, keyframes } from '@mui/material';

export interface TrafficDotProps {
  status: "ok" | "warning" | "error";
  pulseOnCritical: boolean;
}

const statusColors = {
  "ok": 'success.main',
  "warning": 'warning.light',
  "error": 'error.main',
};

const glowColors = {
  "ok": 'success.main',
  "warning": 'rgba(237, 108, 2, 0.5)',
  "error": 'rgba(211, 47, 47, 0.5)',
};

const pulseAnimation = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(211, 47, 47, 0.7); /* Fallback to red */
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 6px rgba(211, 47, 47, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(211, 47, 47, 0);
  }
`;

export default function TrafficDot(props: TrafficDotProps ) {
  const isCritical = props.status === "warning" || props.status === "error";
  const isPulsing  = isCritical && props.pulseOnCritical;

  return (
    <Box
      sx={{
        position: 'relative',
        width: 14,
        height: 14,
        borderRadius: '50%',
        backgroundColor: statusColors[props.status] || 'grey.400',
        border: '0.3px solid grey',
        display: 'inline-block',
        // Static prominent glow for warning/error
        boxShadow: isCritical
          ? `0 0 8px 2px ${glowColors[props.status]}`
          : (theme) => `0 0 0 2px ${theme.palette.background.paper}`,

        // Animated ripple ring that wraps the dot without altering its core size
        '&::after': isCritical ? {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          animation: isPulsing ? `${pulseAnimation} 2s infinite ease-in-out` : '',
          // Adjust the keyframe box-shadow color contextually
          boxShadow: `0 0 0 0 ${glowColors[props.status]}`,
        } : {},
      }}
    />
  );
}
