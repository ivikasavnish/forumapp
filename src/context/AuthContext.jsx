// src/context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the auth context
const AuthContext = createContext();

// Auth provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  // Initialize auth state from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setIsAdmin(parsedUser.isAdmin);
    }
    setLoading(false);
  }, []);

  // Login function
  const login = (userData) => {
    // In a real app, this would validate credentials with an API
    const userToStore = {
      ...userData,
      name: userData.name || 'Abhinandan Gupta', // Default name if not provided
      isAdmin: userData.email.includes('admin') // Simple admin check
    };
    
    localStorage.setItem('user', JSON.stringify(userToStore));
    setUser(userToStore);
    setIsAdmin(userToStore.isAdmin);
    return true;
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsAdmin(false);
  };

  // Quick auth toggle for development
  const toggleAuth = () => {
    if (user) {
      logout();
    } else {
      login({
        name: 'Dev User',
        email: 'dev@example.com',
        isAdmin: false
      });
    }
  };

  // Toggle admin status
  const toggleAdmin = () => {
    if (user) {
      const updatedUser = {
        ...user,
        isAdmin: !isAdmin,
        email: isAdmin ? 'user@example.com' : 'admin@example.com'
      };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
      setIsAdmin(!isAdmin);
    }
  };

  // Auth context value
  const value = {
    user,
    isAdmin,
    loading,
    login,
    logout,
    toggleAuth,
    toggleAdmin
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for using auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};