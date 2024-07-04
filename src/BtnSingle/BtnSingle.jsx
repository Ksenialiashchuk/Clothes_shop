import React from "react";
import "./accordion.scss";
import { BtnSingleItem } from "./BtnSingleItem";

const BtnSingle = ({ dataBtn }) => {
  const [openId, setId] = React.useState(null);
  console.log(openId);

  return (
    <ul className="accordion">
      {dataBtn.map((dataI, id) => {
        return (
          <BtnSingleItem
            onClick={() => (id === openId ? setId(null) : setId(id))}
            dataI={dataI}
            isOpen={id === openId}
            key={id}
          />
        );
      })}
    </ul>
  );
};

export default BtnSingle;
