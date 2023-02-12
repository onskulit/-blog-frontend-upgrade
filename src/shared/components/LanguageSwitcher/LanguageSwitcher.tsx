import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers';
import { Button } from 'shared/components';

/** Props for component LanguageSwitcher */
interface LanguageSwitcherProps {
  /** External className */
  className?: string;
}

export const LanguageSwitcher = (props: LanguageSwitcherProps) => {
    const { className } = props;

    const { t, i18n } = useTranslation();

    const onLangToggle = useCallback(async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }, []);
    return (
        <Button theme="clear" className={className} onClick={onLangToggle}>
            {i18n.language.toUpperCase()}
        </Button>
    );
};
