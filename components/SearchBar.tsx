import React from "react";
import { MapPin, Search } from "lucide-react";
import "./SearchBar.css";

interface SearchBarProps {
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  onSearchSubmit?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchValue = "",
  onSearchChange,
  onSearchSubmit,
}) => {
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
        value={searchValue}
        onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && onSearchSubmit) {
            onSearchSubmit();
          }
        }}
        placeholder="Find your favorite brew..."
        className="search-input"
      />

      {/* Search Icon */}
      <button className="search-icon-btn" onClick={onSearchSubmit}>
        <Search />
      </button>
    </div>
  );
};

export default SearchBar;
