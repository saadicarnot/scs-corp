import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
export function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="min-h-screen flex flex-col font-sans text-primary bg-white">
      <Header />
      <main className="flex-grow pt-[104px] md:pt-[120px]">
        <Outlet />
      </main>
      <Footer />
    </div>);

}