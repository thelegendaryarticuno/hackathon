import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="min-h-screen bg-[#000510] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent flex flex-col">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[100px]" />
      </div>
      
      <div className="relative z-10 flex flex-col flex-grow">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;