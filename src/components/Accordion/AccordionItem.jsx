import React from "react";
import "./accordion.scss";
import { useRef } from "react";

export const AccordionItem = ({ dataItem, isOpen, onClick }) => {
  const itemRef = useRef(null);
  return (
    <li className="accordion-item">
      <button className="accordion-header" onClick={() => onClick()}>
        {dataItem.question}
      </button>
      <div
        className="accordion-collapse"
        style={
          isOpen ? { height: itemRef.current.scrollHeight } : { height: "0px" }
        }
      >
        <div className="accordion-body" ref={itemRef}>
          {dataItem.answer}
        </div>
      </div>
    </li>
  );
};
