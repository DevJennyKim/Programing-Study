import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const getIngredients = async () => {
      try {
        const response = await axios.get('http://localhost:8080/videos');
        setVideos(response.data);
      } catch (error) {
        console.error('fetching error:', error);
      }
    };
    getIngredients();
  }, []);
  return (
    <>
      <main>
        {videos.length === 0 ? (
          <div>Loading...</div>
        ) : (
          videos.map((video) => (
            <div key={video.id}>
              <img src={video.image} alt={video.title} />
              <h2>{video.title}</h2>
              <h4>{video.channel}</h4>
            </div>
          ))
        )}
      </main>
    </>
  );
}

export default App;
