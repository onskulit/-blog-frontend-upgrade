import { Suspense, useEffect } from 'react';
import './styles/index.scss';
import { useTheme } from 'shared/lib/providers/ThemeProvider';
import { classNames } from 'shared/lib/helpers';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';
import { Loader } from 'shared/components';
import { AppRouter } from './lib/router/AppRouter';

export const App = () => {
    const { theme } = useTheme();

    useEffect(() => {
        throw new Error('Message');
    }, []);
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<Loader />}>
                <Navbar />

                <div className="content-page">
                    <Sidebar />

                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
