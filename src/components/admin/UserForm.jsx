// src/components/admin/UserForm.jsx
import React, { useState } from 'react';

const UserForm = ({ onSubmit, onCancel }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        roles: [],
        password: ''
    });
    const [notification, setNotification] = useState(null);

    const availableRoles = [
        { id: 1, name: 'Role 1' },
        { id: 2, name: 'Role 2' },
        { id: 3, name: 'Role 3' },
        { id: 4, name: 'Role 4' }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleRoleToggle = (roleId) => {
        const updatedRoles = formData.roles.includes(roleId)
            ? formData.roles.filter(id => id !== roleId)
            : [...formData.roles, roleId];

        setFormData({
            ...formData,
            roles: updatedRoles
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.phone) {
            setNotification({
                message: "Please fill in all required fields",
                type: "error"
            });
            setTimeout(() => setNotification(null), 3000);
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setNotification({
                message: "Please enter a valid email address",
                type: "error"
            });
            setTimeout(() => setNotification(null), 3000);
            return;
        }

        // Phone validation (assuming 10-digit number)
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(formData.phone)) {
            setNotification({
                message: "Please enter a valid 10-digit phone number",
                type: "error"
            });
            setTimeout(() => setNotification(null), 3000);
            return;
        }

        onSubmit(formData);
    };

    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium mb-6">Add Users</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Add Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Full name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mobile No.</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="10-digit mobile number"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Email address"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Create password"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Assign Role</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {availableRoles.map(role => (
                            <button
                                key={role.id}
                                type="button"
                                className={`border rounded-md py-2 ${
                                    formData.roles.includes(role.id)
                                        ? 'bg-blue-500 text-white border-blue-500'
                                        : 'border-gray-300 hover:bg-gray-50'
                                }`}
                                onClick={() => handleRoleToggle(role.id)}
                            >
                                {role.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex justify-end space-x-3">
                    {onCancel && (
                        <button
                            type="button"
                            onClick={onCancel}
                            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                    )}
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
                    >
                        Create User
                    </button>
                </div>
            </form>

            {/* Notification */}
            {notification && (
                <div className={`fixed bottom-4 right-4 px-4 py-2 rounded-lg shadow-lg ${
                    notification.type === 'error' ? 'bg-red-500' : 'bg-green-500'
                } text-white`}>
                    {notification.message}
                </div>
            )}
        </div>
    );
};

export default UserForm;