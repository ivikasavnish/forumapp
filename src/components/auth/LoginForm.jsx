// src/components/auth/LoginForm.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = ({ onLogin }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation
        if (!formData.email || !formData.password) {
            setError('Please enter both email and password');
            return;
        }

        // Clear any existing errors
        setError('');

        // Call the login function from props
        onLogin(formData);
    };

    return (
        <div className="bg-gray-800 bg-opacity-80 p-8 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Login</h2>

            {error && (
                <div className="mb-4 p-2 bg-red-500 text-white rounded">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="text-white mb-1 block">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Email"
                    />
                </div>

                <div>
                    <label className="text-white mb-1 block">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Password"
                    />
                </div>

                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="rememberMe"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    <label htmlFor="rememberMe" className="text-white">Remember me</label>
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition-colors w-full"
                >
                    Login
                </button>
            </form>

            <div className="text-center mt-4">
                <p className="text-white">
                    Don't have an account?
                    <Link to="/signup" className="text-blue-400 ml-1 hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginForm;