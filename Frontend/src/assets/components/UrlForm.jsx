import React, { useState } from 'react';
import axios from 'axios';

const UrlForm = ({ setUrlData }) => {
  const [longUrl, setLongUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You will call your backend endpoint here
    try {
      const response = await axios.post('http://localhost:5000/api/shorten', { longUrl });
      setUrlData(response.data);
    } catch (error) {
      console.error('Error shortening URL:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="url-form">
      <input
        type="text"
        placeholder="Enter long URL"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
      />
      <button type="submit">Shorten</button>
    </form>
  );
};

export default UrlForm;
