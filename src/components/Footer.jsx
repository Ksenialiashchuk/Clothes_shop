import React from "react";
import "../scss/footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="line_footer"></div>
      <p>TOP CATEGORIES</p>
      <ul className="nav_footer">
        <li>
          <a>MAN</a>
        </li>
        <li>
          <a>WOMAN</a>
        </li>
        <li>
          <a>KIDS</a>
        </li>
      </ul>
    </div>
  );
}
