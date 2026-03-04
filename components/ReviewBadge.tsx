import React from 'react';
import { Star } from 'lucide-react';
import { REVIEW_DATA } from '../constants';
import './ReviewBadge.css';

const ReviewBadge: React.FC = () => {
  return (
    <div className="review-badge">
      {/* Avatars */}
      <div className="avatar-stack">
        {REVIEW_DATA.avatarUrls.map((url, index) => (
          <img 
            key={index} 
            src={url} 
            alt="User" 
          />
        ))}
      </div>

      {/* Text Info */}
      <div className="review-info">
        <h4 className="review-title">Our Happy Customers</h4>
        <div className="review-stats">
          <div className="stars-container">
             {[...Array(5)].map((_, i) => (
                 <Star key={i} className="star-icon" />
             ))}
          </div>
          <span className="rating-number">{REVIEW_DATA.rating}</span>
          <span className="review-count">({REVIEW_DATA.count})</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewBadge;