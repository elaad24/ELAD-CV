import React from "react";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top ">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Fixed navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mx-auto mb-2 mb-md-0" navigation>
            <li class="nav-item">
              <a href="#about" className=" nav-link  ">
                ABOUT
              </a>
            </li>
            <li class="nav-item">
              <a href="#educationAndProjects" className="nav-link ">
                EDUCATION & PROJECTS
              </a>
            </li>
            <li class="nav-item">
              <a href="#army" className="nav-link ">
                ARMY
              </a>
            </li>
            <li class="nav-item">
              <a href="#qualities" className="nav-link ">
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
