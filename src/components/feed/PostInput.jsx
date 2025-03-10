// src/components/feed/PostInput.jsx
import React, { useState } from 'react';
import UserAvatar from '../common/UserAvatar';

const PostInput = ({ user, onPostSubmit }) => {
    const [postText, setPostText] = useState('');
    const [postVisibility, setPostVisibility] = useState('public');

    const handleSubmit = () => {
        if (postText.trim()) {
            onPostSubmit({
                content: postText,
                visibility: postVisibility,
            });
            setPostText('');
        }
    };

    return (
        <div className="bg-white rounded-lg shadow p-4 mb-6">
            <div className="flex items-center mb-4">
                <UserAvatar name={user.name} size="md" />
                <input
                    type="text"
                    placeholder="Whats happening ?"
                    className="flex-1 ml-2 bg-gray-100 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                />
            </div>
            <div className="flex justify-between border-t pt-3">
                <button className="flex items-center text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                        <circle cx="12" cy="13" r="4"></circle>
                    </svg>
                    <span>Live Video</span>
                </button>
                <button className="flex items-center text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                    <span>Photo/Video</span>
                </button>
                <button className="flex items-center text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                        <line x1="9" y1="9" x2="9.01" y2="9"></line>
                        <line x1="15" y1="9" x2="15.01" y2="9"></line>
                    </svg>
                    <span>Feeling</span>
                </button>
                <select
                    className="mr-2 border rounded px-2 text-sm text-gray-600"
                    value={postVisibility}
                    onChange={(e) => setPostVisibility(e.target.value)}
                >
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                </select>
                <button
                    className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={handleSubmit}
                    disabled={!postText.trim()}
                >
                    Post
                </button>
            </div>
        </div>
    );
};

export default PostInput;