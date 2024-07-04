import React from "react";
import "./accordion.scss";
import { useRef } from "react";
import dataBtn from "./dataBtn";

export const BtnSingleItem = ({ dataI, isOpen, onClick }) => {
  const itemRef = useRef(null);
  return (
    <li className="accordion-item">
      <button className="accordion-header" onClick={() => onClick()}>
        {dataI.question}
      </button>
      <div
        className="accordion-collapse"
        style={
          isOpen ? { height: itemRef.current.scrollHeight } : { height: "0px" }
        }
      >
        <div className="accordion-body" ref={itemRef}>
          {dataI.answer}
        </div>
      </div>
    </li>
  );
};
