// src/pages/SignupPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/common/Logo';
import SignupForm from '../components/auth/SignupForm';

const SignupPage = () => {
    const navigate = useNavigate();

    const handleSignup = (formData) => {
        console.log('Signup attempt with:', formData);

        // For demo purposes, we'll just simulate a successful signup
        // In a real app, you would make an API call here

        // Redirect to login page or directly to feed
        navigate('/login');

        // Alternatively, you could log the user in directly
        // localStorage.setItem('user', JSON.stringify({
        //   name: `${formData.firstName} ${formData.lastName}`,
        //   email: formData.email,
        //   isAdmin: false
        // }));
        // navigate('/feed');
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
                <SignupForm onSignup={handleSignup} />
            </div>
        </div>
    );
};

export default SignupPage;