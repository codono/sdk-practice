import { Box, BoxProps } from '@material-ui/core';

export default function KosesPoster(props: BoxProps) {
  return (
    <Box
      component="img"
      alt="logo"
      src="/static/brand/koses-poster.svg"
      height="504"
      {...props}
    />
  );
}
