import { data } from "flickity";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Singlepage() {
  const [item, setItem] = useState();
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://6677d2f50bd45250561c9e1c.mockapi.io/items/`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);
  return (
    <div>
      {item && (
        <div>
          <h1>{item.title}</h1>
          <img src={item.imageUrl} />
        </div>
      )}
    </div>
  );
}
