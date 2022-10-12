import {
  HOME_PAGE,
  ERROR_PAGE,
  PROFILE_PAGE,
  REGISTRATION_PAGE,
  LOGIN_PAGE,
} from "./path";

import { HomePage, ErrorPage, ProfilePage, AuthPage } from "../pages";

export const PUBLIC_ROUTES = [
  {
    path: HOME_PAGE,
    Component: <HomePage />,
  },
  {
    path: ERROR_PAGE,
    Component: <ErrorPage />,
  },
  {
    path: PROFILE_PAGE,
    Component: <ProfilePage />,
  },
  {
    path: REGISTRATION_PAGE,
    Component: <AuthPage />,
  },
  {
    path: LOGIN_PAGE,
    Component: <AuthPage />,
  },
];

export const PRIVATE_ROUTES = [];
