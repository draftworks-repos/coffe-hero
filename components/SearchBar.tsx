import React from 'react';
import { MapPin, Search } from 'lucide-react';
import './SearchBar.css';

const SearchBar: React.FC = () => {
  return (
    <div className="search-bar-container">
      {/* Location Dropdown */}
      <div className="location-dropdown">
        <MapPin />
        <span>New York, USA</span>
      </div>

      {/* Search Input */}
      <input 
        type="text" 
        placeholder="Find your favorite brew..." 
        className="search-input"
      />

      {/* Search Icon */}
      <button className="search-icon-btn">
        <Search />
      </button>
    </div>
  );
};

export default SearchBar;