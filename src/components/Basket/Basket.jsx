import React from "react";
import "./basket.scss";

const Basket = ({ items = [] }) => {
  return (
    <div className="basket">
      <h2 className="basket_text">MY BASKET</h2>
      <div>
        {items.map((item) => (
          <div className="cart">
            <div>
              <img src={item.img} className="basket_img" />
            </div>
            <div className="cart_box">
              <p className="basket_title">{item.title} </p>
              <p className="basket_price"> ${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Basket;
