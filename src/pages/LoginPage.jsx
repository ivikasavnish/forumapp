// src/pages/LoginPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/common/Logo';
import LoginForm from '../components/auth/LoginForm';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (formData) => {
    console.log('Login attempt with:', formData);
    
    // Attempt to login
    const success = login({
      name: 'Abhinandan Gupta',
      email: formData.email
    });
    
    if (success) {
      // Redirect to feed page
      navigate('/feed');
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Header */}
      <header className="border-b border-blue-700 p-4">
        <div className="flex items-center">
          <Logo />
        </div>
      </header>

      {/* Main Content */}
      <div 
        className="flex-1 flex items-center justify-center p-4 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2672&q=80")' }}
      >
        <LoginForm onLogin={handleLogin} />
      </div>
    </div>
  );
};

export default LoginPage;