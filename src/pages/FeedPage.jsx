// src/pages/FeedPage.jsx
import React, { useState, useEffect } from 'react';
import PostInput from '../components/feed/PostInput';
import Post from '../components/feed/Post';
import { useAuth } from '../context/AuthContext';

const FeedPage = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Load sample posts
    setPosts([
      {
        id: 1,
        username: 'Amazing Landscape from Cyphen Tower',
        title: 'Amazing Landscape from Cyphen Tower',
        timeAgo: '15h',
        visibility: 'Public',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        likesCount: 221,
        commentsCount: 3,
        comments: []
      },
      {
        id: 2,
        username: 'Student Group Wins Red Dot Award 2022',
        title: 'Student Group Wins Red Dot Award 2022',
        timeAgo: '1 day',
        visibility: 'Public',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        likesCount: 221,
        commentsCount: 3,
        comments: [
          {
            id: 1,
            username: 'Piyam Goyal',
            text: 'Great Work Guys!',
            timeAgo: '2h',
            likesCount: 2
          }
        ]
      }
    ]);
  }, []);

  const handlePostSubmit = (newPost) => {
    const postWithDetails = {
      id: Date.now(),
      username: user ? user.name : 'Anonymous',
      title: user ? user.name : 'Anonymous',
      timeAgo: 'Just now',
      visibility: newPost.visibility,
      content: newPost.content,
      likesCount: 0,
      commentsCount: 0,
      comments: []
    };
    
    setPosts([postWithDetails, ...posts]);
  };

  return (
    <div>
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-6">Feed</h1>
      
      {/* Post Input */}
      <PostInput user={user} onPostSubmit={handlePostSubmit} />
      
      {/* Posts */}
      <div className="space-y-6 mt-6">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default FeedPage;