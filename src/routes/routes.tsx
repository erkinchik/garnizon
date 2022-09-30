import {HOME_PAGE,ERROR_PAGE} from "./path";

import {HomePage,ErrorPage} from '../pages'

export const PUBLIC_ROUTES = [
    {
        path: HOME_PAGE,
        Component: <HomePage />,
    },
    {
        path: ERROR_PAGE,
        Component: <ErrorPage />,
    },
];

export const PRIVATE_ROUTES = [
    {
        path: HOME_PAGE,
        Component: <HomePage />,
    },
];
