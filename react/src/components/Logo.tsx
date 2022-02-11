import { Box, BoxProps } from '@material-ui/core';

// ----------------------------------------------------------------------

export default function Logo(props: BoxProps) {
  return (
    <Box
      component="img"
      alt="logo"
      src="/static/brand/aris-logo.svg"
      height={40}
      {...props}
    />
  );
}
