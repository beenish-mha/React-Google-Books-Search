import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="topnav">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="something">
          Google Books
        </a>

        <ul className="nav nav-all">
          <Link to="/">
            <li className="nav-link">Home</li>
          </Link>

          <Link to="/Search">
            <li className="nav-link">Search</li>
          </Link>
          <Link to="/Saved">
            <li className="nav-link">Saved</li>
          </Link>
        </ul>
      </nav>
      <hr />
    </div>
  );
}

export default Navbar;
