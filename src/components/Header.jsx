import { Link } from "react-router-dom";
import "../scss/header.scss";
import Search from "./Search";

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
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
    </div>
  );
}
