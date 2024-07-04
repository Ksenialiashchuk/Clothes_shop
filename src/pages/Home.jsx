import React from "react";
import Card from "../components/Card";
import Block from "../components/Block";
import Accordion from "../components/AccordionSingle/Accordion";
import axios from "axios";
import data from "../components/AccordionSingle/data";
import Footer from "../components/Footer";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Home({ searchValue, setSearchValue }) {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const Navigate = useNavigate();

  React.useEffect(() => {
    axios
      .get("https://6677d2f50bd45250561c9e1c.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="container">
        <h2 className="main_title">LATEST PRODUCTS</h2>
        <>
          <div className="cards">
            {items
              .filter((obj) => {
                if (
                  obj.title.toLowerCase().includes(searchValue.toLowerCase())
                ) {
                  return true;
                }
              })
              .map((obj) => (
                <Card
                  title={obj.title}
                  img={obj.imageUrl}
                  price={obj.price}
                  id={obj.id}
                  key={obj.id}
                />
              ))}
          </div>
        </>
        <Block />
        <h2 className="main_title FAQ">FREQUENTLY AND QUESTIONS</h2>
        <Accordion data={data} />
      </div>
    </div>
  );
}
