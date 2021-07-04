import React from "react";
import { NavLink } from "react-router-dom";

const nav2 = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white navbar">
      <NavLink exact to="/" className="text-white text-decoration-none">
        <span className="fs-4">photo</span>
      </NavLink>

      <hr />

      <ul className="navbar-nav flex-column mb-auto ">
        <li className="nav-item ">
          <a href="#about" className=" nav-link text-light ">
            ABOUT
          </a>
        </li>
        <li>
          <a href="#educationAndProjects" className="nav-link text-white">
            EDUCATION & PROJECTS
          </a>
        </li>
        <li>
          <a href="#army" className="nav-link text-white">
            ARMY
          </a>
        </li>
        <li>
          <a href="#qualities" className="nav-link text-white">
            QUALITIES
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default nav2;
