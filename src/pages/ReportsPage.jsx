// src/pages/ReportsPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/common/Sidebar';
import Navbar from '../components/common/Navbar';
import ReportCard from '../components/admin/ReportCard';

const ReportsPage = () => {
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

    const handleDownload = (reportInfo) => {
        console.log(`Downloading ${reportInfo.title} in ${reportInfo.format} format`);
        // In a real app, you would make an API call to generate and download the report

        // For demo purposes, we'll simulate a download
        alert(`Downloading ${reportInfo.title} in ${reportInfo.format.toUpperCase()} format`);
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

                    {/* Reports Grid */}
                    <div className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <ReportCard
                                title="All Users"
                                description="Posts, comments and likes count"
                                onDownload={handleDownload}
                            />
                            <ReportCard
                                title="All Users"
                                description="Having more than 10 posts"
                                onDownload={handleDownload}
                            />
                            <ReportCard
                                title="Postwise Report"
                                description="Title/description, comments, likes"
                                onDownload={handleDownload}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportsPage;