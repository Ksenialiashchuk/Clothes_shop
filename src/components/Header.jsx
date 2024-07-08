import { Link } from "react-router-dom";
import "../scss/header.scss";
import Search from "./Search";
import basket from "../assets/img/basket.png";

export default function Header({ searchValue, setSearchValue }) {
  return (
    <div className="header">
      <Link to="/" className="header__logo">
        <h4>YOUR-LOOK</h4>
      </Link>

      <div className="menu">
        <ul>
          <li>
            <a className="nav_header">WOMAN</a>
          </li>
          <li>
            <a className="nav_header">MAN</a>
          </li>
          <li>
            <a className="nav_header">KIDS</a>
          </li>
        </ul>
      </div>
      <div className="basket_display">
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        <Link to="/basket">
          <img src={basket} className="img_header" />
        </Link>
      </div>
    </div>
  );
}
