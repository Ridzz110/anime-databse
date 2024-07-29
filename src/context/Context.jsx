import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import rateLimit from 'axios-rate-limit';

// Create a Context
const JakanContext = createContext();

// Provider Component
const JakanProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedGenreId, setSelectedGenreId] = useState('');
  const [selectedAnime, setSelectedAnime] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const http = rateLimit(axios.create(), { maxRequests: 1, perMilliseconds: 1000 });

    const fetchData = async (retries = 3, delay = 1000) => {
      try {
        const [recommendation, popular, random, genre] = await Promise.all([
          http.get('https://api.jikan.moe/v4/recommendations/anime'),
          http.get('https://api.jikan.moe/v4/top/anime'),
          http.get('https://api.jikan.moe/v4/random/anime?filter=Rx'),
          http.get('https://api.jikan.moe/v4/genres/anime?filter=genres')
        ]);

        const genreAnimes = selectedGenreId ? await http.get(`https://api.jikan.moe/v4/anime?genres=${selectedGenreId}`) : { data: { data: [] } };
        const selectedAnimeData = selectedAnime ? await http.get(`https://api.jikan.moe/v4/anime/${selectedAnime}`) : { data: { data: {} } };
        const Searched = searchQuery ? await http.get('https://api.jikan.moe/v4/anime', { params: { q: searchQuery } }) : { data: { data: [] } };

        setSearchResults(Searched.data.data);
        setData({
          data1: recommendation.data.data,
          data2: popular.data.data,
          data3: random.data.data,
          data4: genre.data.data,
          data5: genreAnimes.data.data,
          data6: selectedAnimeData.data.data
        });
        
        setLoading(false);
      } catch (err) {
        if (err.response && err.response.status === 429 && retries > 0) {
          console.log('Rate limit exceeded. Retrying...');
          setTimeout(() => fetchData(retries - 1, delay * 2), delay);
        } else {
          setError(err);
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [selectedGenreId, selectedAnime, searchQuery]);

  return (
    <JakanContext.Provider value={{ data, loading, error, setSelectedGenreId, setSelectedAnime, setSearchQuery, searchResults }}>
      {children}
    </JakanContext.Provider>
  );
};

// Custom hook to use Jakan Context
const useJakan = () => {
  const context = useContext(JakanContext);
  if (context === undefined) {
    throw new Error('useJakan must be used within a JakanProvider');
  }
  return context;
};

export { JakanProvider, useJakan };
