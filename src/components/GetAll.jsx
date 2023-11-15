import axios from 'axios';
import React, { useState } from 'react';

function GetAll() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [showH1, setShowH1] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://python-pc.onrender.com/secure/get/all/');
      setShowH1(true);
      setData(response.data);
    } catch (error) {
      setError(`Error fetching data: ${error.message}`);
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <button style={{ marginTop: '20px' }} onClick={fetchData}>Y despúes a mi, onichan ^w^</button>

      {showH1 && (
        <h1>El back-end todo un HDP: 🤑</h1>
      )}
      {data && (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
      {error && (
        <div>Error fetching data: {error}</div>
      )}
    </div>
  );
};

export default GetAll;