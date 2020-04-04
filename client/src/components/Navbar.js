import React from "react";

function Navbar() {
  return (
    <div className="topnav">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="something">
          Google Books
        </a>

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="something">
              Search <span class="sr-only">(current)</span>
            </a>
            <a class="nav-item nav-link active" href="something">
              Save <span class="sr-only">(current)</span>
            </a>
          </div>
        </div>
      </nav>
      <hr />
    </div>
  );
}

export default Navbar;
