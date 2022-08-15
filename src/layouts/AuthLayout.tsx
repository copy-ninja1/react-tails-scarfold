import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components';

function AuthLayout(): JSX.Element {
  return (
    <div>
      <Header isLogedIn />
      <Outlet />
    </div>
  );
}

export default AuthLayout;
