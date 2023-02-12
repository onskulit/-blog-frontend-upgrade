export type AppRoutes = 'main' | 'about' | 'notFound';

export const RoutePath: Record<AppRoutes, string> = {
    main: '/',
    about: '/about',
    notFound: '*',
};
