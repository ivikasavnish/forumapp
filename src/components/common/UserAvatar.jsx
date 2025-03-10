// src/components/common/UserAvatar.jsx
import React from 'react';

const UserAvatar = ({ name, size = 'md', status = null }) => {
    // Define sizes
    const sizeClasses = {
        sm: 'w-8 h-8 text-xs',
        md: 'w-10 h-10 text-sm',
        lg: 'w-12 h-12 text-base'
    };

    // Get the first letter of the name for the avatar
    const initial = name ? name.charAt(0) : 'U';

    return (
        <div className="relative">
            <div className={`${sizeClasses[size]} rounded-full bg-indigo-500 flex items-center justify-center text-white font-medium`}>
                {initial}
            </div>

            {status && (
                <div
                    className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full ${
                        status === 'active' ? 'bg-green-500' : 'bg-red-500'
                    } border-2 border-white`}
                />
            )}
        </div>
    );
};

export default UserAvatar;