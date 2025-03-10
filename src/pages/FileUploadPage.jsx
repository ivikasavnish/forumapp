// src/pages/FileUploadPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/common/Sidebar';
import Navbar from '../components/common/Navbar';
import FileUpload from '../components/admin/FileUpload';

const FileUploadPage = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);

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
    }, [navigate]);

    const handleUpload = (file) => {
        console.log('Uploading file:', file.name);
        // In a real app, you would make an API call to upload the file

        // Simulate processing
        setTimeout(() => {
            alert(`Successfully uploaded ${file.name}`);
            navigate('/manage-users');
        }, 1500);
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
                    {/* Navbar */}
                    <Navbar user={user} isAdmin={isAdmin} />

                    {/* Upload Content */}
                    <div className="p-8">
                        <FileUpload
                            onUpload={handleUpload}
                            acceptedFormats={['.csv', '.xlsx']}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FileUploadPage;