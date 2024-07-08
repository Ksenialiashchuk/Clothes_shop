import "../scss/card.scss";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
export default function Card(item) {
  const Navigate = useNavigate();
  return (
    <div className="card">
      <img
        src={item.img}
        className="img_card"
        onClick={() => Navigate(`info/${item.id}`)}
      />
      <h3>{item.title}</h3>
      <div className="price_card">
        <p>PRICE: ${item.price}</p>
      </div>
    </div>
  );
}
