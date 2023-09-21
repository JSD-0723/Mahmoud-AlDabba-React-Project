import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Nav() {
  const [mode, setMode] = useState(true);
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
  return (
    <>
      <header>
        <div className="nav-container " theme="re">
          <Link className="website-name" to={'/'}>
            <h1>Web Topics</h1>
          </Link>
          <div className="nav-buttons">
            <button class="btn dark-mode" onClick={darkMode}>
              {mode ? (
                <>
                  <ion-icon
                    name="sunny-outline"
                    class="nav-icon"
                  ></ion-icon>
                  Light Mode
                </>
              ) : (
                <>
                  <ion-icon name="moon-outline" class="nav-icon"></ion-icon>
                  Dark Mode
                </>
              )}
            </button>
            <button className="btn fav">
              <ion-icon name="heart-outline" class="nav-icon"></ion-icon>
              favorites
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
