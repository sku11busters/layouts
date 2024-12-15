import React from "react";

const ShopItem = ({ product }) => {
  return (
    <div className="shop-item">
      <img src={product.img} alt={product.name} />
      <div>
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <p>Color: {product.color}</p>
      </div>
    </div>
  );
};

export default ShopItem;
