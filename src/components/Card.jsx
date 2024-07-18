import "../scss/card.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import button from "./button_card_done.png";
import buttonClicked from "./button_card_clicked.png";

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
      <div className="box_card">
        <div className="price_card">
          <p>PRICE: ${price}</p>
        </div>
        <img
          src={isAdded ? buttonClicked : button}
          className="image_button_card"
          onClick={onClickPlus}
        />
      </div>
    </div>
  );
}
