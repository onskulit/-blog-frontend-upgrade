import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from 'shared/components/Loader/Loader';
import { routeMapper } from './routeMapper';

export const AppRouter = () => (
    <Suspense fallback={<Loader />}>
        <Routes>
            {Object.values(routeMapper).map(({ path, element }) => (
                <Route
                    path={path}
                    element={<div className="page-wrapper">{element}</div>}
                />
            ))}
        </Routes>
    </Suspense>
);
