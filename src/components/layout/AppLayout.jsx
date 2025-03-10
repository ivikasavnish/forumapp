// src/components/layout/AppLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../common/Sidebar';
import Navbar from '../common/Navbar';
import AuthToggle from '../common/AuthToggle';
import { useAuth } from '../../context/AuthContext';

/**
 * Main application layout with sidebar, navbar and content area
 * This component provides a consistent layout for authenticated pages
 */
const AppLayout = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Navbar */}
          <Navbar />
          
          {/* Content */}
          <main className="flex-1 p-4 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
      
      {/* Auth Toggle for development */}
      <AuthToggle />
    </div>
  );
};

export default AppLayout;