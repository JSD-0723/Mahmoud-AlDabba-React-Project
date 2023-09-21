import React from 'react'
import { Link } from 'react-router-dom'
export default function Card({image,topic,name,id,category}) {

  return (
    <Link to={`/details/${id}`} class="card">
        <img src={require(`../../image/${image}`)} alt={topic} />
        <div class="card-text">
          <h4>{category}</h4>
          <p class="card-framework">{topic}</p>
          <div class="star">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
          <p class="card-author">Author: {name}</p>
        </div>
        </Link>
  )
}


