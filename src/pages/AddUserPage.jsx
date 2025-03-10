// src/pages/AddUserPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/common/Sidebar';
import UserForm from '../components/admin/UserForm';

const AddUserPage = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        // Get user info from localStorage
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
            setIsAdmin(parsedUser.isAdmin);

            // If not admin, redirect to feed
            if (!parsedUser.isAdmin) {
                navigate('/feed');
            }
        } else {
            // If not logged in, redirect to login
            navigate('/login');
        }
    }, [navigate]);

    const handleSubmit = (formData) => {
        console.log('Creating new user:', formData);
        // In a real app, you would make an API call to create the user

        // Redirect back to user management page
        navigate('/manage-users');
    };

    const handleCancel = () => {
        navigate('/manage-users');
    };

    if (!user || !isAdmin) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Sidebar and Main Content Container */}
            <div className="flex">
                {/* Sidebar */}
                <Sidebar isAdmin={isAdmin} />

                {/* Main Content */}
                <div className="flex-1">
                    <div className="p-4 flex justify-between items-center">
                        <h1 className="text-2xl font-medium text-gray-700">User Management</h1>
                        <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-indigo-500 mr-2 flex items-center justify-center text-white">
                                {user.name.charAt(0)}
                            </div>
                            <div>
                                <div className="font-medium">{user.name}</div>
                                <div className="text-xs text-gray-500">Admin</div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4">
                        <UserForm
                            onSubmit={handleSubmit}
                            onCancel={handleCancel}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddUserPage;