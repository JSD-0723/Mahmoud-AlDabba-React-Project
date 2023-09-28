import React from 'react';
import Stars from './Stars';

export default function DetailsContent({
  id,
  name,
  image,
  topic,
  category,
  description,
  subtopics,
  ratings,
}) {
  const addCardLocalStorage = () => {
    let getLocalStorage = JSON.parse(localStorage.getItem('card')) || [];
    let newCard = { name: name, id: id, image: image, ratings: ratings };
    getLocalStorage.push(newCard);
    localStorage.setItem('card', JSON.stringify(getLocalStorage));
  };
  return (
    <>
      <div className="details-container">
        <div className="details-content">
          <div className="details-info">
            <p className="details-content-title">{category}</p>
            <h2 className="details-content-header">{topic}</h2>
            <div className="star">
              <Stars ratings={ratings} />
            </div>
            <p className="details-content-para">{description}</p>
          </div>
          <div className="course-card">
            <img
              src={require(`../../image/${image}`)}
              alt={topic}
              className="course-card-img"
            />
            <div className="course-card-content">
              <p className="course-card-title">
                <span>{topic} </span>by <a href="/">{name}</a>
              </p>
              <div className="course-card-content-info">
                <p className="course-card-content-info-title">
                  Interest about this topic?
                </p>
                <button
                  className="course-card-content-info-btn"
                  onClick={addCardLocalStorage}
                >
                  Add To Favourites
                  <ion-icon
                    name="heart-outline"
                    className="course-card-content-info-icon"
                  ></ion-icon>
                </button>
                <p className="course-card-content-info-Unlimited">
                  Unlimited Credits
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="course-topics">
        <div className="topics-container">
          <ul className="topics-box">
            <li>
              <h3>HTML Sub Topics</h3>
            </li>
            {subtopics.map((text) => {
              return (
                <li key={text}>
                  <ion-icon
                    name="checkmark-circle-outline"
                    class="topics--icon"
                    role="img"
                  ></ion-icon>
                  <span>{text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
