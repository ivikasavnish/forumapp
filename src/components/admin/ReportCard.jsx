// src/components/admin/ReportCard.jsx
import React, { useState } from 'react';

const ReportCard = ({ title, description, onDownload }) => {
    const [fileFormat, setFileFormat] = useState('csv');

    const handleDownload = () => {
        onDownload({
            title,
            format: fileFormat
        });
    };

    return (
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <div className="w-16 h-16 mb-4 rounded-full bg-blue-500 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
            </div>
            <h3 className="text-lg font-medium mb-1">{title}</h3>
            <p className="text-sm text-gray-500 mb-6 text-center">{description}</p>

            <div className="flex items-center mb-4 w-full justify-center space-x-4">
                <label className="flex items-center">
                    <input
                        type="radio"
                        name={`format-${title}`}
                        value="excel"
                        checked={fileFormat === 'excel'}
                        onChange={() => setFileFormat('excel')}
                        className="mr-2"
                    />
                    <span>Excel</span>
                </label>
                <label className="flex items-center">
                    <input
                        type="radio"
                        name={`format-${title}`}
                        value="csv"
                        checked={fileFormat === 'csv'}
                        onChange={() => setFileFormat('csv')}
                        className="mr-2"
                    />
                    <span>.CSV</span>
                </label>
            </div>

            <button
                className="bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600"
                onClick={handleDownload}
            >
                Download
            </button>
        </div>
    );
};

export default ReportCard;