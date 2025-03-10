// src/components/common/AuthToggle.jsx
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const AuthToggle = () => {
  const { user, isAdmin, toggleAuth, toggleAdmin } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle button */}
      <button
        onClick={toggleOpen}
        className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-3 shadow-lg flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>

      {/* Toggle panel */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl p-4 mb-2 min-w-[250px] animate-fade-in">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Development Controls</h3>
          
          <div className="space-y-4">
            {/* Authentication toggle */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                Authentication
              </span>
              <button
                onClick={toggleAuth}
                className={`${
                  user ? 'bg-green-500' : 'bg-gray-200'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
              >
                <span
                  className={`${
                    user ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </button>
            </div>

            {/* Admin toggle - only visible when authenticated */}
            {user && (
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  Admin Mode
                </span>
                <button
                  onClick={toggleAdmin}
                  className={`${
                    isAdmin ? 'bg-purple-500' : 'bg-gray-200'
                  } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
                >
                  <span
                    className={`${
                      isAdmin ? 'translate-x-6' : 'translate-x-1'
                    } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                  />
                </button>
              </div>
            )}

            {/* Status display */}
            <div className="text-xs text-gray-500 border-t pt-2">
              {user ? (
                <div>
                  <p>Logged in as: <span className="font-medium">{user.name}</span></p>
                  <p>Role: <span className="font-medium">{isAdmin ? 'Admin' : 'User'}</span></p>
                </div>
              ) : (
                <p>Not authenticated</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthToggle;