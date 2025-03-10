// src/components/auth/SignupForm.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupForm = ({ onSignup }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        rememberMe: false,
        agreeToTerms: false
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });

        // Clear the error for this field when it changes
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};

        // Required fields
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';

        // Email validation
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }

        // Phone validation (10 digits)
        if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = 'Phone number must be 10 digits';
        }

        // Password validation
        if (formData.password && formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        // Password confirmation
        if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        // Terms agreement
        if (!formData.agreeToTerms) {
            newErrors.agreeToTerms = 'You must agree to the terms and privacy policy';
        }

        setErrors(newErrors);

        // Form is valid if there are no errors
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            onSignup(formData);
        }
    };

    return (
        <div className="bg-gray-800 bg-opacity-80 p-8 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-white mb-3 text-center">Create account</h2>
            <p className="text-gray-300 text-center mb-6">For business, band or celebrity.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-white mb-1 block">First name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={`w-full p-2 rounded-md focus:outline-none focus:ring-2 ${errors.firstName ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`}
                            placeholder="First name"
                        />
                        {errors.firstName && <p className="mt-1 text-xs text-red-400">{errors.firstName}</p>}
                    </div>
                    <div>
                        <label className="text-white mb-1 block">Last name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={`w-full p-2 rounded-md focus:outline-none focus:ring-2 ${errors.lastName ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`}
                            placeholder="Last name"
                        />
                        {errors.lastName && <p className="mt-1 text-xs text-red-400">{errors.lastName}</p>}
                    </div>
                </div>

                <div>
                    <label className="text-white mb-1 block">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full p-2 rounded-md focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`}
                        placeholder="Email"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>

                <div>
                    <label className="text-white mb-1 block">Phone number</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full p-2 rounded-md focus:outline-none focus:ring-2 ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`}
                        placeholder="Phone number"
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-white mb-1 block">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`w-full p-2 rounded-md focus:outline-none focus:ring-2 ${errors.password ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`}
                            placeholder="Password"
                        />
                        {errors.password && <p className="mt-1 text-xs text-red-400">{errors.password}</p>}
                    </div>
                    <div>
                        <label className="text-white mb-1 block">Confirm password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={`w-full p-2 rounded-md focus:outline-none focus:ring-2 ${errors.confirmPassword ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`}
                            placeholder="Confirm password"
                        />
                        {errors.confirmPassword && <p className="mt-1 text-xs text-red-400">{errors.confirmPassword}</p>}
                    </div>
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

                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="agreeToTerms"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        className={`mr-2 ${errors.agreeToTerms ? 'border-red-500' : ''}`}
                    />
                    <label htmlFor="agreeToTerms" className="text-white">
                        I agree to all the <span className="text-blue-400">Terms</span> and <span className="text-blue-400">Privacy policy</span>
                    </label>
                </div>
                {errors.agreeToTerms && <p className="mt-1 text-xs text-red-400">{errors.agreeToTerms}</p>}

                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition-colors w-full"
                >
                    Create Account
                </button>
            </form>

            <div className="text-center mt-4">
                <p className="text-white">
                    Already have an account?
                    <Link to="/login" className="text-blue-400 ml-1 hover:underline">
                        Log In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignupForm;