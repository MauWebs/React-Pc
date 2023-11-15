import axios from 'axios';
import React, { useState } from 'react';

function Post() {
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);

    const hacerClic = async () => {
        try {
            const response = await axios.post('https://python-pc.onrender.com/secure/post/');
            setResponseData(response.data);
        } catch (error) {
            setError(`Error al hacer clic: ${error.message}`);
            console.error('Error al hacer clic:', error);
        }
    };

    return (
        <>
            <button style={{ marginTop: '20px' }} onClick={hacerClic}>Haceme click bebe uwu</button>

            {responseData && (
                <div>
                    <h2>Doxeado pa, te regalaste 😎</h2>
                </div>
            )}

            {error && (
                <div>
                    <h2>Error:</h2>
                    <div>{error}</div>
                </div>
            )}
        </>
    );
}

export default Post;