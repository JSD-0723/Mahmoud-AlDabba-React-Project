import { Link } from 'react-router-dom';
export default function Nav({ darkMode, mode, showFav }) {
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
                  <ion-icon name="sunny-outline" class="nav-icon"></ion-icon>
                  Light Mode
                </>
              ) : (
                <>
                  <ion-icon name="moon-outline" class="nav-icon"></ion-icon>
                  Dark Mode
                </>
              )}
            </button>
            <button className="btn fav" onClick={showFav}>
              <ion-icon name="heart-outline" class="nav-icon"></ion-icon>
              favorites
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
