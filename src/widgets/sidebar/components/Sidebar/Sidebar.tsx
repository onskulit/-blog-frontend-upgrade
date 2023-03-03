import { classNames } from 'shared/lib/helpers';
import { useState } from 'react';
import { Button, LanguageSwitcher, ThemeSwitcher } from 'shared/components';
import { useTranslation } from 'react-i18next';

import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(
                styles.Sidebar,
                { [styles.collapsed]: collapsed },
                [className]
            )}
        >
            <Button onClick={onToggle} data-testid="sidebar.toggle">
                {collapsed ? t('expand') : t('collapse')}
            </Button>

            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    );
};
