import { classNames } from 'shared/lib/helpers';
import { Theme, useTheme } from 'shared/lib/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button } from 'shared/components';

/** Props for component ThemeSwitcher */
interface ThemeSwitcherProps {
  /** External className */
  className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
      <Button
        className={classNames('', {}, [className])}
        onClick={toggleTheme}
      >
          {theme === Theme.light ? <LightIcon /> : <DarkIcon />}
      </Button>
  );
};
