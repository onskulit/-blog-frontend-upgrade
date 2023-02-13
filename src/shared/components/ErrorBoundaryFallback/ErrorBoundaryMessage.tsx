import { Suspense } from 'react';
import { FallbackProps } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';

export const ErrorBoundaryMessage = (props: FallbackProps) => {
    const { error } = props;
    const { t } = useTranslation();

    return (
        <div>{`${t('An unexpected error has occurred')}: ${error.message}`}</div>
    );
};
