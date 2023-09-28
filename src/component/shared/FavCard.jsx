import React from 'react';
import Stars from './Stars';
export default function FavCard({cardsObj}) {
   
  return (
    <>
      <div className="fav-card">
        <img
          src={require(`../../image/${cardsObj.image}`)}
          alt={cardsObj.name}
        />
        <div className="card-text">
          <p>{cardsObj.name}</p>
          <div className="star">
            <Stars ratings={cardsObj.ratings} />
          </div>
        </div>
      </div>
    </>
  );
}
