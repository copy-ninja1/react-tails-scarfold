import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from 'modules/Home';
import Login from 'modules/Login';
import Signup from 'modules/Signup';

import MainLayout, { AuthLayout } from '../layouts';

function AllRoutes(): JSX.Element {
  const mainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [{ path: '', element: <Home /> }],
  };

  const authRoutes = {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: '', element: <Login /> },
      { path: 'signup', element: <Signup /> },
    ],
  };

  const routing = useRoutes([mainRoutes, authRoutes]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{routing}</>;
}

export default AllRoutes;
