import React from "react";
import { useState, useEffect } from "react";

export default function Basket() {
  const [item, setItem] = useState({});
  useEffect(() => {
    fetch(`https://6677d2f50bd45250561c9e1c.mockapi.io/items`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  });
  <div className="basket">
    <h1>Basket</h1>
    <div className="basket_info">
      <div>
        <img alt="basket goods" />
      </div>
      <h1></h1>
      <p>price</p>
    </div>
  </div>;
}
