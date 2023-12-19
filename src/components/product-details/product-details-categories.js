import React from "react";

const ProductDetailsCategories = ({ name }) => {
  return (
    <div className="product__details-categories product__details-more">
      <p>Category:</p>
      <span>
        <a href="#" aria-label={name}>{" "}{name}</a>
      </span>
    </div>
  );
};

export default ProductDetailsCategories;
