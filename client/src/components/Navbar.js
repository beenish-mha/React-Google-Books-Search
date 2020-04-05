import React from "react";

function Navbar() {
  return (
    <div className="topnav">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="something">
          Google Books
        </a>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="something">
              Search <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link active" href="something">
              Save <span className="sr-only">(current)</span>
            </a>
          </div>
        </div>
      </nav>
      <hr />
    </div>
  );
}

export default Navbar;
