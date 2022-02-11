import { Card as MuiCard } from '@material-ui/core';

interface CardProps {
  content?: any;
  width?: number | string;
  height?: number | string;
}

export const Card = ({
  content = 'card content',
  width = 'fit-content',
  height = 'fit-content',
  ...props
}: CardProps): JSX.Element => (
  <MuiCard
    sx={{
      padding: '8px',
      width: typeof width === 'number' ? `${width}px` : width,
      height: typeof height === 'number' ? `${height}px` : height,
      borderRadius: '16px'
    }}
  >
    {content}
  </MuiCard>
);
