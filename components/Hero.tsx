import React, { useState, useRef } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import ReviewBadge from "./ReviewBadge";
import ProductCard from "./ProductCard";
import MenuPopup from "./MenuPopup";
import { HERO_PRODUCTS } from "../constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Hero.css";

const Hero: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [heroSearch, setHeroSearch] = useState("");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleSearchChange = (val: string) => {
    setHeroSearch(val);
  };

  const handleSearchSubmit = () => {
    if (heroSearch.trim().length > 0) {
      setIsMenuOpen(true);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      // Scroll by the width of one card (approximate based on layout)
      // On mobile/tablet where snap is active, this helps trigger the next snap
      const scrollAmount = container.clientWidth;

      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="hero-container">
      {/* --- Background Elements --- */}
      <div className="hero-background">
        <img
          src="https://res.cloudinary.com/dgf5ru8jw/image/upload/f_auto,q_auto/v1771265195/Gemini_Generated_Image_hb78eyhb78eyhb78_tiypou.png"
          alt="Coffee Shop Background"
          className="hero-bg-image"
        />
        {/* Dark Overlay for text readability */}
        <div className="hero-overlay"></div>
      </div>

      {/* --- Navbar --- */}
      <div className="navbar-wrapper">
        <Navbar onMenuClick={() => setIsMenuOpen(true)} />
      </div>

      {/* --- Main Center Content --- */}
      <div className="hero-content-wrapper">
        <div className="hero-content">
          <h1 className="hero-title">
            Savor the <span className="hero-highlight">Magic</span> <br />
            <span className="hero-sub">of Perfect Coffee</span>
          </h1>

          <div className="search-wrapper">
            <SearchBar
              searchValue={heroSearch}
              onSearchChange={handleSearchChange}
              onSearchSubmit={handleSearchSubmit}
            />
          </div>

          <ReviewBadge />
        </div>
      </div>

      {/* --- Bottom Products --- */}
      <div className="products-wrapper">
        <div className="products-layout">
          {/* Product List - Left Side on Mobile/Tablet */}
          <div className="products-list no-scrollbar" ref={scrollContainerRef}>
            {HERO_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Navigation Controls - Right Side on Mobile/Tablet */}
          {/* "Right navigation the icon up then below it left icon" -> Next on Top, Prev on Bottom */}
          <div className="nav-controls">
            <button
              className="nav-btn next-btn"
              onClick={() => scroll("right")}
              aria-label="Scroll Right"
            >
              <ChevronRight size={24} />
            </button>

            <button
              className="nav-btn prev-btn"
              onClick={() => scroll("left")}
              aria-label="Scroll Left"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* --- Menu Popup --- */}
      <MenuPopup
        isOpen={isMenuOpen}
        onClose={() => {
          setIsMenuOpen(false);
          setHeroSearch("");
        }}
        initialSearchQuery={heroSearch}
      />
    </div>
  );
};

export default Hero;
