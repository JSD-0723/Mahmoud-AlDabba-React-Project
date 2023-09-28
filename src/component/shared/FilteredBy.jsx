import React from 'react'

export default function FilteredBy({onChange,filterOption}) {
  return (
    <>
        <div className="filter">
                <label htmlFor="filter">Filter by</label>
                <select
                  className="select"
                  name="filter"
                  id="filter"
                  onChange={onChange}
                >
                  {filterOption?.map(({ title, value }) => (
                    <option value={value || title} key={title}>
                      {title}
                    </option>
                  ))}
                </select>
              </div>
    </>
  )
}
