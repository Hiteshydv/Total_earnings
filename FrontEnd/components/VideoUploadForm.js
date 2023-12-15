// src/components/VideoUploadForm.js (updated)
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const VideoUploadForm = () => {
  const [videoLink, setVideoLink] = useState('');
  const history = useHistory();

  const handleUpload = async () => {
    try {
      const response = await axios.post('http://localhost:5000/upload', {
        title: 'Sample Video', // Replace with actual title
        link: videoLink,
        views: 1000, // Replace with actual views
        likes: 50, // Replace with actual likes
        comments: 10, // Replace with actual comments
        subscribers: 100, // Replace with actual subscribers
      });

      console.log(response.data);

      // Redirect to the loader page
      history.push('/loader');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Landing Page</h1>
      <input
        type="text"
        placeholder="Enter video link"
        value={videoLink}
        onChange={(e) => setVideoLink(e.target.value)}
      />
      <button onClick={handleUpload}>Analyze Video</button>
    </div>
  );
};

export default VideoUploadForm;
