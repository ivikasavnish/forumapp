// src/pages/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/common/Logo';

const LandingPage = () => {
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
                className="flex-1 flex flex-col items-center justify-center p-4 bg-cover bg-center"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2672&q=80")' }}
            >
                <div className="text-center text-white space-y-6 max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Social media shared today,<br/>
                        tomorrow or by location
                    </h1>
                    <p className="text-xl mb-6">Discover with Maze</p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/signup"
                            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition-colors w-full sm:w-auto"
                        >
                            Create account
                        </Link>
                        <span className="text-white self-center">or</span>
                        <Link
                            to="/login"
                            className="bg-white text-blue-500 py-2 px-6 rounded-md hover:bg-gray-100 transition-colors w-full sm:w-auto"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;