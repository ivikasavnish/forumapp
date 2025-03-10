// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import context
import { AuthProvider, useAuth } from './context/AuthContext';

// Import layout
import AppLayout from './components/layout/AppLayout';

// Import auth toggle
import AuthToggle from './components/common/AuthToggle';

// Import pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import FeedPage from './pages/FeedPage';
import UserManagementPage from './pages/UserManagementPage';
import AddUserPage from './pages/AddUserPage';
import ReportsPage from './pages/ReportsPage';
import FileUploadPage from './pages/FileUploadPage';
import ProfilePage from './pages/ProfilePage';

// Protected route component
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }
  
  if (!user) {
    return <Navigate to="/login" />;
  }
  
  return children;
};

// Admin route component
const AdminRoute = ({ children }) => {
  const { user, isAdmin, loading } = useAuth();
  
  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }
  
  if (!user) {
    return <Navigate to="/login" />;
  }
  
  if (!isAdmin) {
    return <Navigate to="/feed" />;
  }
  
  return children;
};

// Main App component
const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      
      {/* Protected routes using the AppLayout */}
      <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
        {/* User routes */}
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        
        {/* Admin routes with additional protection */}
        <Route 
          path="/manage-users" 
          element={
            <AdminRoute>
              <UserManagementPage />
            </AdminRoute>
          } 
        />
        <Route 
          path="/add-user" 
          element={
            <AdminRoute>
              <AddUserPage />
            </AdminRoute>
          } 
        />
        <Route 
          path="/reports" 
          element={
            <AdminRoute>
              <ReportsPage />
            </AdminRoute>
          } 
        />
        <Route 
          path="/upload-users" 
          element={
            <AdminRoute>
              <FileUploadPage />
            </AdminRoute>
          } 
        />
      </Route>
      
      {/* Redirect to landing page for any unknown routes */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

// Wrap the app with auth provider
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
        {/* Auth toggle for landing, login and signup pages */}
        <Routes>
          <Route path="/" element={<AuthToggle />} />
          <Route path="/login" element={<AuthToggle />} />
          <Route path="/signup" element={<AuthToggle />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;