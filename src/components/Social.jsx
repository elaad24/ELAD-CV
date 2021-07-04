import React from "react";
import Github from "../icons/github.png";
import Linkdin from "../icons/linkedin.png";
const Social = () => {
  return (
    <div className="align">
      <div className="flex_direction_row">
        <div className="media">
          <a
            href="http://www.github.com/elaad24"
            className=""
            target="_blank"
            rel="noreferrer"
          >
            <img src={Github} alt="" />
          </a>
        </div>
        <div className="media">
          <a
            href="http://www.linkedin.com/in/elad-dadon-62772a1b3.com"
            className=""
            target="_blank"
            rel="noreferrer"
          >
            <img src={Linkdin} alt="" />
          </a>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Social;
