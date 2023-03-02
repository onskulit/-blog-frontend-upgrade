import { Suspense } from 'react';
import { FallbackProps } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';
import { Loader } from 'shared/components';

import { ErrorBoundaryMessage } from './ErrorBoundaryMessage';

export const ErrorBoundaryFallback = (props: FallbackProps) => (
    <Suspense fallback={<Loader />}>
        <ErrorBoundaryMessage {...props} />
    </Suspense>
);
