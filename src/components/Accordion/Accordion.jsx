import React from "react";
import "./accordion.scss";
import { AccordionItem } from "./AccordionItem";

const Accordion = ({ data }) => {
  const [openId, setId] = React.useState(null);

  return (
    <ul className="accordion">
      {data.map((dataItem, id) => {
        return (
          <AccordionItem
            onClick={() => (id === openId ? setId(null) : setId(id))}
            dataItem={dataItem}
            isOpen={id === openId}
            key={id}
          />
        );
      })}
    </ul>
  );
};

export default Accordion;
