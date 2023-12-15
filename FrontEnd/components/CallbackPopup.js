// src/components/CallbackPopup.js (updated)
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const CallbackPopup = ({ onClose }) => {
  const { setCallbackData } = useContext(AppContext);
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [comments, setComments] = useState('');
  const history = useHistory();

  const handleSubmit = async () => {
    const callbackData = {
      name,
      contactNumber,
      preferredTime,
      comments,
    };

    setCallbackData(callbackData);

    try {
      await axios.post('http://localhost:5000/request-callback', callbackData);
      // Redirect to the success page after submitting the callback request
      history.push('/success');
    } catch (error) {
      console.error(error);
    }

    onClose();
  };

  return (
    <div>
      <h2>Request Callback</h2>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label>Contact Number:</label>
      <input
        type="text"
        value={contactNumber}
        onChange={(e) => setContactNumber(e.target.value)}
      />
      <label>Preferred Callback Time:</label>
      <input
        type="text"
        value={preferredTime}
        onChange={(e) => setPreferredTime(e.target.value)}
      />
      <label>Comments:</label>
      <textarea value={comments} onChange={(e) => setComments(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default CallbackPopup;
