import React from 'react'

function SearchBar({ searchText, setSearchText }) {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search notes..."
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
  )
}

export default SearchBar
