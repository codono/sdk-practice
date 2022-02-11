import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { ThemeDirectionState, ThemeModeState } from '../store/atom';

function useSettings() {
  const [themeMode, setThemeMode] = useRecoilState(ThemeModeState);
  const [themeDirection, setThemeDirection] = useRecoilState(
    ThemeDirectionState
  );

  const isLight = themeMode === 'light';

  const handleToggleTheme = useCallback(
    () => setThemeMode(isLight ? 'dark' : 'light'),
    [isLight]
  );

  const handleChangeTheme = useCallback(
    (event) => setThemeMode(event.target.value),
    []
  );

  const handleChangeDirection = useCallback(
    (event) => setThemeDirection(event.target.value),
    []
  );

  return {
    // Mode
    themeMode,
    toggleMode: handleToggleTheme,
    selectMode: handleChangeTheme,
    // Direction
    themeDirection,
    selectDirection: handleChangeDirection
  };
}

export default useSettings;
