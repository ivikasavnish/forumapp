// src/components/feed/Post.jsx
import React, { useState } from 'react';
import UserAvatar from '../common/UserAvatar';
import Comment from './Comment';

const Post = ({ post }) => {
    const [showComments, setShowComments] = useState(false);
    const [commentText, setCommentText] = useState('');

    const handleLike = () => {
        // Handle like logic here
        console.log(`Liking post ${post.id}`);
    };

    const handleComment = (e) => {
        e.preventDefault();
        if (commentText.trim()) {
            console.log(`Adding comment to post ${post.id}: ${commentText}`);
            setCommentText('');
        }
    };

    return (
        <div className="bg-white rounded-lg shadow overflow-hidden mb-4">
            {/* Post Header */}
            <div className="p-4 flex justify-between items-start">
                <div className="flex">
                    <UserAvatar name={post.username} status={post.status} size="md" />
                    <div className="ml-3">
                        <h3 className="font-medium">{post.title || post.username}</h3>
                        <div className="text-xs text-gray-500">
                            {post.timeAgo} · {post.visibility}
                        </div>
                    </div>
                </div>
                <button className="text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                        <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                </button>
            </div>

            {/* Post Content */}
            <div className="px-4 pb-3">
                <p className="text-gray-800">{post.content}</p>
            </div>

            {/* Post Stats */}
            <div className="px-4 py-2 border-t border-gray-100 text-sm text-gray-500">
                {post.likesCount} Likes · {post.commentsCount} Comments
            </div>

            {/* Post Actions */}
            <div className="px-4 py-2 border-t border-gray-100 flex">
                <button
                    className="flex-1 flex items-center justify-center py-2 text-gray-500 hover:text-gray-700"
                    onClick={handleLike}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <span>Like</span>
                </button>
                <button
                    className="flex-1 flex items-center justify-center py-2 text-gray-500 hover:text-gray-700"
                    onClick={() => setShowComments(!showComments)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                    <span>Comments</span>
                </button>
            </div>

            {/* Comments Section */}
            <div className="px-4 py-3 border-t border-gray-100 bg-gray-50">
                <form onSubmit={handleComment} className="relative">
                    <input
                        type="text"
                        placeholder="Write a comment"
                        className="w-full bg-white rounded-full px-4 py-2 pr-10 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </form>

                {showComments && post.comments && post.comments.length > 0 && (
                    <div className="mt-4 space-y-4">
                        {post.comments.map((comment, index) => (
                            <Comment key={index} comment={comment} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Post;