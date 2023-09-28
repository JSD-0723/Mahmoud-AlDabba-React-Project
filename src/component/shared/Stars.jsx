import React from 'react';

const Stars = ({ ratings }) => {
  const fullStarsNumber = Math.floor(ratings);
  const halfStarNumber = ratings % 1 >= 0.5;
  const starIcons = [];
  for (let i = 0; i < fullStarsNumber; i++) {
    starIcons.push(
      <ion-icon name="star" style={{ color: 'orange' }}></ion-icon>
    );
  }
  if (halfStarNumber) {
    starIcons.push(
      <ion-icon name="star-half" style={{ color: 'orange' }}></ion-icon>
    );
  }
  return <> {starIcons} </>;
};
export default Stars;
