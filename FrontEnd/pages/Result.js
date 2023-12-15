// src/pages/Result.js (updated)
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Result = ({ location }) => {
  const { callbackData } = useContext(AppContext);
  const videoLink = new URLSearchParams(location.search).get('videoLink');

  // Fetch video metrics and earnings based on the videoLink (make API request if needed)
  // Mock data for demonstration purposes
  const videoMetrics = {
    title: 'Sample Video',
    views: 1000,
    likes: 50,
    comments: 10,
    subscribers: 100,
    earnings: 1230,
    rank: 1,
  };

  return (
    <div>
      <h1>Result Page</h1>
      <p>Video: {videoMetrics.title}</p>
      <p>Views: {videoMetrics.views}</p>
      <p>Likes: {videoMetrics.likes}</p>
      <p>Comments: {videoMetrics.comments}</p>
      <p>Subscribers: {videoMetrics.subscribers}</p>
      <p>Earnings: ${videoMetrics.earnings}</p>
      <p>Rank: {videoMetrics.rank}</p>

      {callbackData && (
        <div>
          <h2>Callback Request Data:</h2>
          <p>Name: {callbackData.name}</p>
          <p>Contact Number: {callbackData.contactNumber}</p>
          <p>Preferred Callback Time: {callbackData.preferredTime}</p>
          <p>Additional Comments: {callbackData.comments}</p>
        </div>
      )}
    </div>
  );
};

export default Result;
