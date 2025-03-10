// src/components/common/Logo.jsx
import React from 'react';

const Logo = ({ size = 'md' }) => {
    const logoSize = size === 'sm' ? 'w-8 h-8' : 'w-10 h-10';
    const textSize = size === 'sm' ? 'text-lg' : 'text-xl';

    return (
        <div className="flex items-center">
            <div className={`${logoSize} bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold ${textSize} mr-2`}>
                M
            </div>
            <span className={`${textSize} font-bold text-gray-800`}>Maze</span>
        </div>
    );
};

export default Logo;