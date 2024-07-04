import React from "react";
import "../scss/singlepage.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BtnSingle from "../BtnSingle/BtnSingle";

export default function Singlepage() {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://6677d2f50bd45250561c9e1c.mockapi.io/items/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  return (
    <div className="singlepage">
      <img src={item?.imageUrl} alt="" className="img_single" />
      <div className="block_single">
        <p className="title_single">{item?.title}</p>
        <p>PRICE: {item?.price}$</p>
        <div className="line_single"></div>
        <button className="button_single">ADD TO BASKET</button>
      </div>
    </div>
  );
}
