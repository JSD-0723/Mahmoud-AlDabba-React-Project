import { Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Nav from './Nav';
import Fav from './Fav';

export default function LayOut() {
  const [mode, setMode] = useState(true);
  const [showFav, setShowFav] = useState(true);
  const [data, setData] = useState([]);
  let darkMode = () => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.setAttribute('theme', 'light');
      localStorage.setItem('theme', 'light');
      setMode(true);
    } else {
      document.documentElement.setAttribute('theme', 'dark');
      localStorage.setItem('theme', 'dark');
      setMode(false);
    }
  };

  const showFunction = () => {
    setShowFav(!showFav);
  };
  useEffect(() => {
    try {
      const localStorageData = localStorage.getItem('card');

      if (localStorageData !== null) {
        const parsedData = JSON.parse(localStorageData);

        setData(parsedData);
      }
    } catch (error) {
      console.error('Error retrieving data from localStorage:', error);
    }
  }, []);

  return (
    <>
      <Nav darkMode={darkMode} mode={mode} showFav={showFunction} />
      <Outlet />
      <Fav show={showFav} cardsObj={data} />
    </>
  );
}
