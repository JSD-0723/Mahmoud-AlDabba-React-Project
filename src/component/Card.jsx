import React from 'react';
import { Link } from 'react-router-dom';
import Stars from './shared/Stars';

export default function Card({ image, topic, name, id, category, ratings }) {
  return (
    <Link to={`Mahmoud-AlDabba-React-Project/details/${id}`} class="card">
      <img src={require(`../image/${image}`)} alt={topic} />
      <div className="card-text">
        <h4 className="cart-cat">{category}</h4>
        <p className="card-framework">{topic}</p>
        <div className="star">
          <Stars ratings={ratings} key={id} />
        </div>
        <p className="card-author">Author: {name}</p>
      </div>
    </Link>
  );
}
