import React, { useState } from "react";

export default function Cards({ src }) {
  const [isFloating, setIsFloating] = useState(false);

  const handleIconClick = () => {
    setIsFloating((prev) => !prev); // Toggle the `floating` class
  };

  return (
    <div className="p-2 col-12 col-md-6 col-lg-4">
      <section className={`inner ${isFloating ? "floating" : "position-relative"}`}>
        <div className="image-container">
          <img src={src} className="rounded w-100" alt="portfolio" />
        </div>
        <div
          className="inner-icon d-flex justify-content-center align-items-center"
          onClick={handleIconClick}
          style={{ cursor: "pointer" }}
        >
          <i className="fa-solid fa-plus fs-1"></i>
        </div>
      </section>
    </div>
  );
}
