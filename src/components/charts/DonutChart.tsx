import * as React from 'react';

import { styled } from '@mui/material/styles';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { PieChart } from '@mui/x-charts/PieChart';

export interface DonutChartProps extends DonutChartCenterProps {
  data: {
    label: string;
    value: number;
  }[];
}

interface DonutChartCenterProps {
  primaryText: string;
  secondaryText: string;
}

interface StyledTextProps {
  variant: 'primary' | 'secondary';
}

const StyledText = styled('text', {
  shouldForwardProp: (prop) => prop !== 'variant',
})<StyledTextProps>(({ theme }) => ({
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fill: (theme.vars || theme).palette.text.secondary,
  variants: [
    {
      props: {
        variant: 'primary',
      },
      style: {
        fontSize: theme.typography.h5.fontSize,
      },
    },
    {
      props: ({ variant }) => variant !== 'primary',
      style: {
        fontSize: theme.typography.body2.fontSize,
      },
    },
    {
      props: {
        variant: 'primary',
      },
      style: {
        fontWeight: theme.typography.h5.fontWeight,
      },
    },
    {
      props: ({ variant }) => variant !== 'primary',
      style: {
        fontWeight: theme.typography.body2.fontWeight,
      },
    },
  ],
}));

function DonutChartCenterLabel({ primaryText, secondaryText }: DonutChartCenterProps) {
  const { width, height, left, top } = useDrawingArea();
  const primaryY = top + height / 2 - 10;
  const secondaryY = primaryY + 24;

  return (
    <React.Fragment>
      <StyledText variant="primary" x={left + width / 2} y={primaryY}>
        {primaryText}
      </StyledText>
      <StyledText variant="secondary" x={left + width / 2} y={secondaryY}>
        {secondaryText}
      </StyledText>
    </React.Fragment>
  );
}

const colors = [
  'hsl(220, 20%, 65%)',
  'hsl(220, 20%, 42%)',
  'hsl(220, 20%, 35%)',
  'hsl(220, 20%, 25%)',
];

export default function DonutChart(props: DonutChartProps) {
  return (
    <PieChart
      colors={colors}
      margin={{
        left: 80,
        right: 80,
        top: 80,
        bottom: 80,
      }}
      series={[
        {
          data: props.data,
          innerRadius: 75,
          outerRadius: 100,
          paddingAngle: 0,
          highlightScope: { fade: 'global', highlight: 'item' },
        },
      ]}
      height={260}
      width={260}
      hideLegend
    >
      <DonutChartCenterLabel primaryText={props.primaryText} secondaryText={props.secondaryText} />
    </PieChart>
  );
}
