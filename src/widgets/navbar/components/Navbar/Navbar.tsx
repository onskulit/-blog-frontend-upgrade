import { Link } from "react-router-dom";
import { AppLink, ThemeSwitcher } from "shared/components";
import { classNames } from "shared/lib/helpers";
import { RoutePath } from "shared/lib/router";
import styles from "./Navbar.module.scss";

/** Props for component Navbar */
interface NavbarProps {
  /** External className */
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  return (
    <nav className={classNames(styles.Navbar, {}, [className])}>
      <ThemeSwitcher />

      <div className={styles.links}>
        <AppLink
          to={RoutePath.main}
          className={styles.mainLink}
          theme="secondary"
        >
          Главная
        </AppLink>
        <AppLink to={RoutePath.about} theme="secondary">
          О сайте
        </AppLink>
      </div>
    </nav>
  );
};
