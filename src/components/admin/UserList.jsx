// src/components/admin/UserList.jsx
import React, { useState } from 'react';
import UserAvatar from '../common/UserAvatar';

const UserList = ({ users, onActivate, onDeactivate }) => {
    const [notification, setNotification] = useState(null);

    const handleStatusChange = (userId, isActive) => {
        if (isActive) {
            onDeactivate(userId);
            setNotification({
                message: "ID Successfully Deactivated!",
                type: "deactivate",
                userId
            });
        } else {
            onActivate(userId);
            setNotification({
                message: "ID Successfully Activated!",
                type: "activate",
                userId
            });
        }

        // Clear notification after 3 seconds
        setTimeout(() => {
            setNotification(null);
        }, 3000);
    };

    const handleUndo = () => {
        if (notification) {
            // Reverse the action
            if (notification.type === 'activate') {
                onDeactivate(notification.userId);
            } else {
                onActivate(notification.userId);
            }
            setNotification(null);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-lg font-medium">List of Users</h2>
                <div className="flex space-x-2">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center">
                        Upload Users
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center">
                        Create User
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="border-b last:border-b-0">
                            <td className="p-4 flex items-center">
                                <UserAvatar name={user.name} status={user.active ? 'active' : 'inactive'} />
                                <div className="flex items-center ml-3">
                                    <span>{user.name}</span>
                                </div>
                            </td>
                            <td className="p-4 text-gray-600">{user.phone}</td>
                            <td className="p-4 text-gray-600">{user.email}</td>
                            <td className="p-4">
                                <button
                                    className={`px-4 py-1 rounded-full ${
                                        user.active
                                            ? 'bg-red-100 text-red-600 hover:bg-red-200'
                                            : 'bg-green-100 text-green-600 hover:bg-green-200'
                                    }`}
                                    onClick={() => handleStatusChange(user.id, user.active)}
                                >
                                    {user.active ? 'Deactivate' : 'Activate'}
                                </button>
                            </td>
                            <td className="p-4">
                                <button className="text-gray-500 hover:text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Toast Notification */}
            {notification && (
                <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg flex items-center justify-between">
                    <span>{notification.message}</span>
                    <button
                        className="ml-4 px-3 py-1 bg-gray-700 rounded-md hover:bg-gray-600 text-sm"
                        onClick={handleUndo}
                    >
                        Undo
                    </button>
                </div>
            )}
        </div>
    );
};

export default UserList;