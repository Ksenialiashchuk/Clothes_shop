import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { data } from "flickity";

export default function Singlepage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://6677d2f50bd45250561c9e1c.mockapi.io/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div>
      <h1>Our Clothe</h1>

      {items.map((item) => (
        <Link key={item.id} to={`/info/${item.id}`}>
          <img src={item.imageUrl}></img>
        </Link>
      ))}
    </div>
  );
}
