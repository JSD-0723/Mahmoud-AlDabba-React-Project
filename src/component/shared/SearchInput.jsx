import React from 'react';

export default function SearchInput({ onChange }) {
  return (
    <>
      <div className="search">
        <ion-icon name="search-outline" className="search-icon"></ion-icon>
        <input
          type="text"
          className="search-input"
          id="myText"
          placeholder="Search the website ..."
          onChange={onChange}
        />
      </div>
    </>
  );
}
