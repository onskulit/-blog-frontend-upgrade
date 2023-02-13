import { FallbackProps } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';

export const ErrorBoundaryFallback = (props: FallbackProps) => {
    const { error } = props;
    /* TODO: solve problem with hooks */
    const { t } = useTranslation();

    return (
        <div>{`${t('An unexpected error has occurred')}: ${error.message}`}</div>
    );
};
