import { atom } from 'recoil';

type ThemeMode = 'light' | 'dark';
type ThemeDirection = 'rtl' | 'ltr';

const ThemeModeState = atom<ThemeMode>({
  key: 'ThemeMode',
  default: 'light'
});

const ThemeDirectionState = atom<ThemeDirection>({
  key: 'ThemeDirection',
  default: 'ltr'
});

export { ThemeModeState, ThemeDirectionState };
