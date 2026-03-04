import React from 'react';
import { Product } from '../types';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <div className="card-content">
        {/* Image */}
        <div className="card-image-wrapper">
            <img 
                src={product.image} 
                alt={product.name} 
                className="card-image" 
            />
        </div>

        {/* Info */}
        <div className="card-details">
          <h3 className="card-title">{product.name}</h3>
          <p className="card-price">{product.price}</p>
          <button className="order-btn">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;