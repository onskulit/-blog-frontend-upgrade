import { ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/helpers";
import styles from "./AppLink.module.scss";

type AppLinkThemeType = "primary" | "secondary";

/** Props for component AppLink */
interface AppLinkProps extends LinkProps {
  /** Theme */
  theme?: AppLinkThemeType;
  /** External className */
  className?: string;
  /** Child component */
  children?: ReactNode;
}

export const AppLink = (props: AppLinkProps) => {
  const { className, to, children, theme = "primary", ...otherProps } = props;
  return (
    <Link
      className={classNames(styles.AppLink, {}, [className, styles[theme]])}
      to={to}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
