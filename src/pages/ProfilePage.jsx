// src/pages/ProfilePage.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import UserAvatar from '../components/common/UserAvatar';

const ProfilePage = () => {
  const { user, isAdmin } = useAuth();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-48 flex justify-center items-end">
          <div className="relative -bottom-10">
            <UserAvatar name={user.name} size="lg" status="active" />
          </div>
        </div>
        
        {/* Profile Info */}
        <div className="pt-16 pb-8 px-8 text-center">
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-gray-600 mt-1">{user.email}</p>
          <div className="mt-2">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              {isAdmin ? 'Admin' : 'Regular User'}
            </span>
          </div>
        </div>
        
        {/* Profile Tabs */}
        <div className="border-t border-gray-200">
          <div className="flex">
            <button className="flex-1 py-4 px-6 text-center border-b-2 border-blue-500 text-blue-500 font-medium">
              Profile
            </button>
            <button className="flex-1 py-4 px-6 text-center text-gray-600 hover:text-gray-800">
              Activity
            </button>
            <button className="flex-1 py-4 px-6 text-center text-gray-600 hover:text-gray-800">
              Settings
            </button>
          </div>
        </div>
      </div>
      
      {/* Profile Details */}
      <div className="bg-white rounded-lg shadow-md mt-6 p-6">
        <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
            <p className="mt-1 text-gray-800">{user.name}</p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-500">Email Address</h3>
            <p className="mt-1 text-gray-800">{user.email}</p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-500">Role</h3>
            <p className="mt-1 text-gray-800">{isAdmin ? 'Administrator' : 'Regular User'}</p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-500">Status</h3>
            <div className="mt-1 flex items-center">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              <p className="text-gray-800">Active</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="text-sm font-medium text-gray-500 mb-3">Account Actions</h3>
          <div className="flex space-x-3">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Edit Profile
            </button>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
              Change Password
            </button>
          </div>
        </div>
      </div>
      
      {/* Additional sections like recent activity, posts, etc. could go here */}
    </div>
  );
};

export default ProfilePage;