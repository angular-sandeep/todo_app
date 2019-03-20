import React from "react";
import { Link } from "react-router-dom";

const Navbar = function() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/dashboard">
        Todo App
      </Link>
      <ul className="navbar-nav" />
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/logout">
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
