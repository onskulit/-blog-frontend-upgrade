import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { ThemeProvider } from 'shared/lib/providers/ThemeProvider';
import 'shared/config/i18n/i18n';
import { ErrorBoundaryFallback } from 'shared/components';

import { App } from './app';

render(
    <BrowserRouter>
        <ThemeProvider>
            <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
                <App />
            </ErrorBoundary>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
