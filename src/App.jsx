import React, { useState } from 'react';
import axios from 'axios';
import RandomCat from './Components/RandomCat';
import BanList from './Components/BanList';
import './App.css';

function App() {
  const [currentCat, setCurrentCat] = useState(null);
  const [banList, setBanList] = useState([]);

  const fetchCat = async () => {
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search', {
        headers: {
          'x-api-key': 'live_dtiH8QBBzLfr87ovdiSSwyQeWobmaqYDPARa45CxXzD0aUbHXLgCjLd3CraXWtZE'
        }
      });
      const catData = response.data[0];
      if (!banList.includes(catData.breeds[0]?.origin)) {
        setCurrentCat(catData);
      }
    } catch (error) {
      console.error('There was an error fetching the cat data:', error);
    }
  };

  const addToBanList = (country) => {
    setBanList([...banList, country]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Veni Vici!</h1>
        <p>Discover cats from your wildest dreams!</p>
      </header>
      <main className="App-content">
        <RandomCat cat={currentCat} fetchCat={fetchCat} banList={banList} addToBanList={addToBanList} />
        <BanList banList={banList} />
      </main>
    </div>
  );
}

export default App;
