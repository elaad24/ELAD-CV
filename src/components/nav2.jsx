import React from "react";

const nav2 = () => {
  return (
    <div class="d-flex flex-column flex-shrink-0 p-3 text-white navbar">
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span class="fs-4">photo</span>
      </a>

      <hr />

      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <a href="#" class="nav-link ">
            ABOUT
          </a>
        </li>
        <li>
          <a href="#" class="nav-link text-white">
            EDUCATION & PROJECTS
          </a>
        </li>
        <li>
          <a href="#" class="nav-link text-white">
            ARMY
          </a>
        </li>
        <li>
          <a href="#" class="nav-link text-white">
            QUALITIES
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default nav2;
