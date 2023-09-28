import React from 'react';
import FavCard from '../shared/FavCard';

export default function Fav({ show, cardsObj }) {
 
  return (
    <>
      <footer
        className="fav-container"
        style={show ? { display: 'block' } : { display: 'none' }}
      >
        <div className="fav-content">
          <h3 className="fav-header">MY favorite Topics</h3>
          <div className="fav-cards">
            {cardsObj?.map((card) => (
              <FavCard cardsObj={card} />
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
