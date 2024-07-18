import React, { useState } from "react";
import "./basket.scss";

const Basket = ({ items = [] }) => {
  const [count, setCount] = useState(0);

  const onClickMinus = () => {
    setCount(count - 1);
  };
  const onClickPlus = () => {
    setCount(count + 1);
  };
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

              <div className="basket_timer">
                <button onClick={onClickMinus}>-</button>
                {count}
                <button onClick={onClickPlus}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Basket;
