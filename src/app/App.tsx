import { Suspense } from 'react';
import './styles/index.scss';
import { useTheme } from 'shared/lib/providers/ThemeProvider';
import { classNames } from 'shared/lib/helpers';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';
import { AppRouter } from './lib/router/AppRouter';

export const App = () => {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />

                <div className="content-page">
                    <Sidebar />

                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
