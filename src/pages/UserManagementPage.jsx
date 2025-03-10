// src/pages/UserManagementPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/common/Sidebar';
import UserList from '../components/admin/UserList';

const UserManagementPage = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [users, setUsers] = useState([]);

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

        // Load sample users
        setUsers([
            { id: 1, name: 'Piyam Goyal', phone: '9988776655', email: 'Priyamtest@gmail.com', active: true },
            { id: 2, name: 'Radhe Shyaam', phone: '9876543210', email: 'Radhetest@gmail.com', active: false },
            { id: 3, name: 'Ravi Mishra', phone: '9988443655', email: 'Ravitest@gmail.com', active: false },
            { id: 4, name: 'Ram Nagar', phone: '9983216655', email: 'Ramtest@gmail.com', active: true },
            { id: 5, name: 'Riya Sukhija', phone: '9123476655', email: 'Riyatest@gmail.com', active: true },
            { id: 6, name: 'Dhwani Sharma', phone: '9983476655', email: 'Dhwanitest@gmail.com', active: true },
            { id: 7, name: 'Madhur Gupta', phone: '9634776655', email: 'Madhurtest@gmail.com', active: true },
            { id: 8, name: 'Mridul Pandey', phone: '7658776655', email: 'Rockytest@gmail.com', active: false },
            { id: 9, name: 'Rajiv Dubey', phone: '8288776655', email: 'Huntertest@gmail.com', active: true },
            { id: 10, name: 'Virat Mehra', phone: '9188776655', email: 'Herotest@gmail.com', active: true },
            { id: 11, name: 'Mannat Singh Sahani', phone: '9888776655', email: 'mannattest@gmail.com', active: true },
        ]);
    }, [navigate]);

    const handleActivate = (userId) => {
        setUsers(users.map(user =>
            user.id === userId ? { ...user, active: true } : user
        ));
    };

    const handleDeactivate = (userId) => {
        setUsers(users.map(user =>
            user.id === userId ? { ...user, active: false } : user
        ));
    };

    const handleCreateUser = () => {
        navigate('/add-user');
    };

    const handleUploadUsers = () => {
        navigate('/upload-users');
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
                        <UserList
                            users={users}
                            onActivate={handleActivate}
                            onDeactivate={handleDeactivate}
                            onCreateUser={handleCreateUser}
                            onUploadUsers={handleUploadUsers}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserManagementPage;