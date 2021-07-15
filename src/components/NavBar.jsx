import React from "react";

let closeNavbar = (e) => {
  if (e.target.className == "nav-link") {
    return document.querySelector("#navbarCollapse").classList.toggle("show");
  }
};

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top ">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navigation
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="true"
          aria-label="Toggle navigation"
          name="navbarBTN"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mx-auto mb-2 mb-md-0" navigation>
            <li class="nav-item">
              <a href="#about" className="nav-link" onClick={closeNavbar}>
                ABOUT
              </a>
            </li>
            <li class="nav-item">
              <a
                href="#educationAndProjects"
                className="nav-link"
                onClick={closeNavbar}
              >
                EDUCATION & PROJECTS
              </a>
            </li>
            <li class="nav-item">
              <a href="#army" className="nav-link" onClick={closeNavbar}>
                ARMY
              </a>
            </li>
            <li class="nav-item">
              <a href="#qualities" className="nav-link" onClick={closeNavbar}>
                QUALITIES
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
