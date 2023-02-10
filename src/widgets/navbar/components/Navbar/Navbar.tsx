import { useTranslation } from 'react-i18next';
import { Link } from 'shared/components';
import { classNames } from 'shared/lib/helpers';
import { RoutePath } from 'shared/lib/router';
import styles from './Navbar.module.scss';

/** Props for component Navbar */
interface NavbarProps {
  /** External className */
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;

  const { t, i18n } = useTranslation();
  return (
      <nav className={classNames(styles.Navbar, {}, [className])}>
          <div className={styles.links}>
              <Link to={RoutePath.main} className={styles.mainLink} theme="secondary">
                  {t('Main')}
              </Link>
              <Link to={RoutePath.about} theme="secondary">
                  {t('About')}
              </Link>
          </div>
      </nav>
  );
};
