import React from "react";

const NavBar = () => {
  return (
    <div class="d-flex flex-column flex-shrink-0 p-3 text-white navbar">
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span class="fs-4">photo</span>
      </a>

      <hr />

      <ul class="nav nav-pills flex-column mb-auto ">
        <li class="nav-item">
          <a href="#a" class=" text-white  nav-link ">
            <span>ABOUT</span>
          </a>
        </li>
        <li>
          <a href="#b" class="nav-link text-white ">
            EDUCATION & PROJECTS
          </a>
        </li>
        <li>
          <a href="#c" class="nav-link text-white">
            ARMY
          </a>
        </li>
        <li>
          <a href="#d" class="nav-link text-white">
            QUALITIES
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default NavBar;
