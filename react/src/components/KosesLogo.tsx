import { Box, BoxProps } from '@material-ui/core';

export default function KosesLogo(props: BoxProps) {
  return (
    <Box
      component="img"
      alt="logo"
      src="/static/brand/koses-logo.svg"
      height={50}
      {...props}
    />
  );
}
