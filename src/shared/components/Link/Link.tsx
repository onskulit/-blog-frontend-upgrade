import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import { classNames } from "shared/lib/helpers";
import styles from "./Link.module.scss";

type LinkThemeType = "primary" | "secondary";

/** Props for component Link */
interface LinkProps extends RouterLinkProps {
  /** Theme */
  theme?: LinkThemeType;
  /** External className */
  className?: string;
}

export const Link = (props: React.PropsWithChildren<LinkProps>) => {
  const { className, to, children, theme = "primary", ...otherProps } = props;
  return (
    <RouterLink
      className={classNames(styles.Link, {}, [className, styles[theme]])}
      to={to}
      {...otherProps}
    >
      {children}
    </RouterLink>
  );
};
