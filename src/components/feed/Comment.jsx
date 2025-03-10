// src/components/feed/Comment.jsx
import React from 'react';
import UserAvatar from '../common/UserAvatar';

const Comment = ({ comment }) => {
    return (
        <div className="flex">
            <UserAvatar name={comment.username} size="sm" />
            <div className="ml-2 flex-1">
                <div className="flex items-center justify-between">
                    <h4 className="font-medium text-sm">{comment.username}</h4>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                        <span className="text-xs text-gray-500">{comment.likesCount}</span>
                    </div>
                </div>
                <p className="text-gray-800 text-sm">{comment.text}</p>
                <div className="mt-1 flex items-center text-xs text-gray-500 space-x-2">
                    <span>{comment.timeAgo}</span>
                    <button className="hover:text-gray-700">Reply</button>
                </div>
            </div>
        </div>
    );
};

export default Comment;