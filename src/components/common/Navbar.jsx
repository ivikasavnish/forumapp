// src/components/common/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import UserAvatar from './UserAvatar';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  // Get user data from auth context
  const { user, isAdmin } = useAuth();

  return (
    <div className="flex justify-between items-center p-4 bg-white border-b border-gray-200">
      <div className="relative w-full max-w-xl">
        <input
          type="text"
          placeholder="Search for something here..."
          className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
      </div>

      {user && (
        <div className="ml-4 flex items-center">
          <UserAvatar name={user.name} size="md" />
          <div className="ml-2">
            <div className="font-medium">{user.name}</div>
            {isAdmin && <div className="text-xs text-gray-500">Admin</div>}
          </div>
          
          {/* Quick navigation links for admin */}
          {isAdmin && (
            <div className="ml-6 space-x-3 hidden md:flex">
              <Link to="/manage-users" className="text-sm text-blue-600 hover:text-blue-800">
                Manage Users
              </Link>
              <Link to="/reports" className="text-sm text-blue-600 hover:text-blue-800">
                Reports
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;