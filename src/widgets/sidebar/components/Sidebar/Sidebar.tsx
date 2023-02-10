import { classNames } from 'shared/lib/helpers';
import { useState } from 'react';
import { LanguageSwitcher, ThemeSwitcher } from 'shared/components';

import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
      <div
        className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
          className,
        ])}
      >
          <div className={styles.switchers}>
              <ThemeSwitcher />
              <LanguageSwitcher />
          </div>
      </div>
  );
};
