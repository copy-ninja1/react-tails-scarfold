import React from 'react';
import { Outlet } from 'react-router-dom';

function AuthLayout(): JSX.Element {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default AuthLayout;
