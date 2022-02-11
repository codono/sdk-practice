import { useMemo, ReactNode } from 'react';
// material
import { CssBaseline } from '@material-ui/core';
import {
  ThemeOptions,
  ThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';
import StyledEngineProvider from '@material-ui/core/StyledEngineProvider';
// hooks
import useSettings from '../hooks/useSettings';
//
import shape from './shape';
import palette from './palette';
import typography from './typography';
import breakpoints from './breakpoints';
import GlobalStyles from './globalStyles';
import componentsOverride from './overrides';
import shadows, { customShadows } from './shadows';

// ----------------------------------------------------------------------

type ThemeConfigProps = {
  children: ReactNode;
};

export default function ThemeConfig({ children }: ThemeConfigProps) {
  const { themeMode, themeDirection } = useSettings();
  const isLight = themeMode === 'light';

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: isLight
        ? { ...palette.light, mode: 'light' }
        : { ...palette.dark, mode: 'dark' },
      typography,
      shape,
      breakpoints,
      direction: themeDirection,
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: isLight ? customShadows.light : customShadows.dark
    }),
    [isLight, themeDirection]
  );

  const theme = createMuiTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

const size = {
  sMobile: 320,
  mobile: 480,
  tablet: 600,
  desktop: 960,
  largeScreen: 1280,
  extraLargeScreen: 1920
};

export const device = {
  sMobile: `(min-width: ${size.sMobile}px)`,
  mobile: `(min-width: ${size.mobile}px)`,
  tablet: `(min-width: ${size.tablet}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
  largeScreen: `(min-width: ${size.largeScreen}px)`,
  extraLargeScreen: `(min-width: ${size.extraLargeScreen}px)`
};
