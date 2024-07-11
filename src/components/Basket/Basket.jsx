import React, { useState } from "react";
import Card from "../Card";

const Basket = ({ onAddToCart }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div>
      <h2>My basket</h2>
      {cartItems.map((item, index) => (
        <div key={index}>
          <Card item={item} onAddToCart={addToCart} />
        </div>
      ))}
    </div>
  );
};

export default Basket;
