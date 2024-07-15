import "../scss/card.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import Basket from "./Basket/Basket";

export default function Card({ img, id, title, price, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const Navigate = useNavigate();

  const onClickPlus = () => {
    onPlus({ img, id, title, price });
    setIsAdded(!isAdded);
  };

  return (
    <div className="card">
      <img
        src={img}
        className="img_card"
        onClick={() => Navigate(`info/${id}`)}
      />
      <h3>{title}</h3>
      <div className="price_card">
        <p>PRICE: ${price}</p>
      </div>
      <button onClick={onClickPlus}>Add to Cart</button>
    </div>
  );
}
