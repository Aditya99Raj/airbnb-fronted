import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://png.pngtree.com/element_pic/17/05/03/314a5d762ad70099243b695ae62230d6.jpg"
          alt=""
        />
      </Link>

      <div className="header__center">
        <input type="text" />
        <Link to="/search">
          <SearchIcon />
        </Link>
      </div>

      <div className="header__right">
        <p>Eager to Be Host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
