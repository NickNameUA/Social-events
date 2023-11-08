import React from "react";

import { NavLink } from "react-router-dom";

import "../Styles/NavBar.css";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const NavBar = () => {
  return (
    <nav>
      <NavLink className="navBtn" to="/">
        Домашня сторінка
      </NavLink>
      <NavLink className="navBtn" to="/events">
        Події
      </NavLink>
      <NavLink className="navBtn" to="/create">
        Створення події
      </NavLink>
      <NavLink className="navBtn" to="/search">
        Пошук
      </NavLink>
      <NavLink className="navBtn" to="/profile">
        <AccountCircleOutlinedIcon className="icon" />
      </NavLink>
    </nav>
  );
};

export default NavBar;
