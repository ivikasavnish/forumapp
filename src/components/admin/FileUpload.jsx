// src/components/admin/FileUpload.jsx
import React, { useState, useRef } from 'react';

const FileUpload = ({ onUpload, acceptedFormats = ['.csv', '.xlsx'] }) => {
    const [file, setFile] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [error, setError] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileSelect = (selectedFile) => {
        // Verify file type (e.g., only allow CSV or Excel)
        const fileName = selectedFile.name.toLowerCase();
        const isAccepted = acceptedFormats.some(format => fileName.endsWith(format));

        if (!isAccepted) {
            setError(`Invalid file format. Please upload ${acceptedFormats.join(' or ')}`);
            setFile(null);
            return;
        }

        setError(null);
        setFile(selectedFile);
    };

    const handleInputChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            handleFileSelect(e.target.files[0]);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFileSelect(e.dataTransfer.files[0]);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleUpload = () => {
        if (file) {
            onUpload(file);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium mb-6">Upload File</h2>

            <div
                className={`border-2 border-dashed ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'} rounded-lg p-8 flex flex-col items-center justify-center`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={handleClick}
            >
                <input
                    type="file"
                    className="hidden"
                    ref={fileInputRef}
                    onChange={handleInputChange}
                    accept={acceptedFormats.join(',')}
                />

                <div className="w-16 h-16 mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="17 8 12 3 7 8"></polyline>
                        <line x1="12" y1="3" x2="12" y2="15"></line>
                    </svg>
                </div>

                {file ? (
                    <div className="text-center">
                        <p className="mb-2 font-medium">{file.name}</p>
                        <p className="text-sm text-gray-500">
                            {(file.size / 1024).toFixed(2)} KB
                        </p>
                    </div>
                ) : (
                    <div className="text-center">
                        <p className="mb-2 font-medium">Drop your file here or click to browse</p>
                        <p className="text-sm text-gray-500">
                            Supported formats: {acceptedFormats.join(', ')}
                        </p>
                    </div>
                )}

                {error && (
                    <p className="mt-2 text-sm text-red-500">{error}</p>
                )}
            </div>

            {file && (
                <div className="mt-4 flex justify-end">
                    <button
                        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
                        onClick={handleUpload}
                    >
                        Upload File
                    </button>
                </div>
            )}
        </div>
    );
};

export default FileUpload;