import React from 'react';

export default function SortBy({ onChange }) {
  return (
    <>
      {' '}
      <div className="sort">
        <label htmlFor="sort">Sort by</label>
        <select className="select" name="sort" id="sort" onChange={onChange}>
          <option value="">Default</option>
          <option value="topic">Topic</option>
          <option value="name">Author Name</option>
        </select>
      </div>
    </>
  );
}
