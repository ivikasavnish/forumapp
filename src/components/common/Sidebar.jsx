// src/components/common/Sidebar.jsx
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { useAuth } from '../../context/AuthContext';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAdmin, logout } = useAuth();
  
  // Menu items with improved organization and all available pages
  const menuItems = [
    // User pages
    { 
      id: 'feed', 
      path: '/feed', 
      label: 'Feed', 
      icon: 'feed',
      visibleTo: 'all' 
    },
    { 
      id: 'profile', 
      path: '/profile', 
      label: 'Profile', 
      icon: 'user',
      visibleTo: 'all' 
    },
    
    // Admin section - User Management
    { 
      id: 'admin-header', 
      type: 'header',
      label: 'Administration', 
      visibleTo: 'admin' 
    },
    { 
      id: 'manage-users', 
      path: '/manage-users', 
      label: 'Manage Users', 
      icon: 'users',
      visibleTo: 'admin' 
    },
    { 
      id: 'add-user', 
      path: '/add-user', 
      label: 'Add User', 
      icon: 'user-plus',
      visibleTo: 'admin' 
    },
    { 
      id: 'upload-users', 
      path: '/upload-users', 
      label: 'Upload Users', 
      icon: 'upload',
      visibleTo: 'admin' 
    },
    
    // Admin section - Reports
    { 
      id: 'reports', 
      path: '/reports', 
      label: 'Reports', 
      icon: 'reports',
      visibleTo: 'admin' 
    },
    
    // Logout at the bottom
    { 
      id: 'logout', 
      path: '/logout', 
      label: 'Logout', 
      icon: 'log-out',
      visibleTo: 'all' 
    }
  ];
  
  // Filter menu items based on user role
  const filteredMenuItems = menuItems.filter(item => 
    item.visibleTo === 'all' || (item.visibleTo === 'admin' && isAdmin)
  );
  
  // Handle item click
  const handleItemClick = (path) => {
    if (path === '/logout') {
      logout();
      navigate('/');
    }
  };
  
  // Get icon component by name
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'feed':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="3" y1="9" x2="21" y2="9"></line>
            <line x1="9" y1="21" x2="9" y2="9"></line>
          </svg>
        );
      case 'user':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        );
      case 'users':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        );
      case 'user-plus':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="8.5" cy="7" r="4"></circle>
            <line x1="20" y1="8" x2="20" y2="14"></line>
            <line x1="23" y1="11" x2="17" y2="11"></line>
          </svg>
        );
      case 'upload':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="17 8 12 3 7 8"></polyline>
            <line x1="12" y1="3" x2="12" y2="15"></line>
          </svg>
        );
      case 'reports':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        );
      case 'log-out':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-4 border-b border-gray-200">
        <Link to="/feed">
          <Logo />
        </Link>
      </div>
      
      {user && (
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center">
            <UserAvatar name={user.name} size="sm" status={user ? 'active' : undefined} />
            <div className="ml-2">
              <div className="font-medium text-sm">{user.name}</div>
              <div className="text-xs text-gray-500">{isAdmin ? 'Admin' : 'User'}</div>
            </div>
          </div>
        </div>
      )}
      
      <nav className="p-2">
        {filteredMenuItems.map((item) => {
          // If it's a header, render a divider with label
          if (item.type === 'header') {
            return (
              <div key={item.id} className="mt-4 mb-2 px-3">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {item.label}
                </h3>
              </div>
            );
          }
          
          // Regular menu item
          const isActive = location.pathname === item.path;
          return (
            <div 
              key={item.id}
              onClick={() => handleItemClick(item.path)}
            >
              {item.path === '/logout' ? (
                <button
                  className={`flex items-center space-x-3 w-full px-3 py-3 rounded-lg mb-1 ${
                    isActive ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {getIcon(item.icon)}
                  <span className="font-medium ml-3">{item.label}</span>
                </button>
              ) : (
                <Link 
                  to={item.path}
                  className={`flex items-center space-x-3 w-full px-3 py-3 rounded-lg mb-1 ${
                    isActive ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {getIcon(item.icon)}
                  <span className="font-medium ml-3">{item.label}</span>
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
};

// Import the UserAvatar component 
const UserAvatar = ({ name, size = 'md', status = null }) => {
  // Define sizes
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base'
  };
  
  // Get the first letter of the name for the avatar
  const initial = name ? name.charAt(0) : 'U';
  
  return (
    <div className="relative">
      <div className={`${sizeClasses[size]} rounded-full bg-indigo-500 flex items-center justify-center text-white font-medium`}>
        {initial}
      </div>
      
      {status && (
        <div 
          className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full ${
            status === 'active' ? 'bg-green-500' : 'bg-red-500'
          } border-2 border-white`}
        />
      )}
    </div>
  );
};

export default Sidebar;