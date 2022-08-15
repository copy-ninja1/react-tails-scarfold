/* eslint-disable no-console */
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from 'components';
import AnimatableOutlet from './AnimatableOutlet';

function MainLayout(): JSX.Element {
  const { pathname }: { pathname: string } = useLocation();

  return (
    <>
      <Header isLogedIn={false} />
      <div className="container">
        <AnimatableOutlet />
      </div>
    </>
  );
}

export default MainLayout;
