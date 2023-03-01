import React, { ReactNode } from 'react';
import { AppHeader } from '../components/Layouts/Header';
import { AppFooter } from '../components/Layouts/Footer';

interface Props {
  children: ReactNode;
}

export const MainLayout = (props: Props) => {
  const { children } = props;
  return (
    <div className="main-layout">
      <header>
        <AppHeader />
      </header>
      <main className="layout-children">
        {children}
      </main>
      <footer>
        <AppFooter />
      </footer>
    </div>
  );
};
