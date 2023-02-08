import { classNames } from "shared/lib/helpers";
import { Theme, useTheme } from "shared/lib/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";

import styles from "./ThemeSwitcher.module.scss";

/** Props for component ThemeSwitcher */
interface ThemeSwitcherProps {
  /** External className */
  className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={classNames(styles.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.light ? <LightIcon /> : <DarkIcon />}
    </button>
  );
};
