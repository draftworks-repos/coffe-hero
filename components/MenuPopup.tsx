import React, { useState } from 'react';
import { X, Search, Plus } from 'lucide-react';
import { MENU_ITEMS } from '../constants';
import './MenuPopup.css';

interface MenuPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuPopup: React.FC<MenuPopupProps> = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState('');

  if (!isOpen) return null;

  const filteredItems = MENU_ITEMS.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="menu-overlay">
      {/* Backdrop */}
      <div
        className="menu-backdrop"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="menu-content">
        
        {/* Header Block */}
        <div className="menu-header">
          <div>
            <h2 className="menu-title">Our Menu</h2>
            <p className="menu-subtitle">Select your favorite blend</p>
          </div>
          <button 
            onClick={onClose} 
            className="close-btn"
          >
            <X />
          </button>
        </div>

        {/* Body Block (Search + List) */}
        <div className="menu-body">
            {/* Search Bar */}
            <div className="menu-search-section">
                <div className="menu-search-wrapper">
                    <Search className="menu-search-icon" />
                    <input
                        type="text"
                        placeholder="Search for coffee..."
                        className="menu-search-input"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        autoFocus
                    />
                </div>
            </div>

            {/* Scrollable Content */}
            <div className="menu-grid custom-scrollbar">
                {filteredItems.map(item => (
                    <div key={item.id} className="menu-item group">
                        <div className="menu-item-image-wrapper">
                            <img 
                                src={item.image} 
                                alt={item.name} 
                                className="menu-item-image" 
                            />
                        </div>
                        
                        <div className="menu-item-details">
                            <h3 className="menu-item-name">{item.name}</h3>
                            <p className="menu-item-price">{item.price}</p>
                        </div>
                        
                        <button className="menu-item-add-btn">
                            <Plus />
                        </button>
                    </div>
                ))}
                
                {filteredItems.length === 0 && (
                    <div className="no-results">
                        <Search className="no-results-icon" />
                        <p className="no-results-text">No coffee found matching "{search}"</p>
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPopup;