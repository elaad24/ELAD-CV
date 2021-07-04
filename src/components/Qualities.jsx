import React from "react";
import Html from "../icons/html.png";
import Git from "../icons/git.png";
import Css from "../icons/css.png";
import Mysql from "../icons/mysql.png";
import Mongodb from "../icons/mongodb.png";
import Redux from "../icons/redux.png";
import Js from "../icons/js.png";
import Sass from "../icons/sass.png";
import react from "../icons/react.jpg";
import Php from "../icons/php.jpg";
import Xampp from "../icons/xampp.jpg";
import npm from "../icons/npm.png";
import Vscode from "../icons/vscode.png";
import Sql from "../icons/sql.png";
import Node from "../icons/nodejs.png";

const Qualities = () => {
  return (
    <div className="align" id="qualities" name="qualities">
      <h1 className="pageHeader">QUALITIES</h1>
      <div className="mb-5">
        <div>
          <ul className="qualities_list">
            <li>Energetic, Motivator</li>
            <li>Team player, All-around player</li>
            <li>Loyal and responsible</li>
            <li>Fantastic human relations.</li>
          </ul>
        </div>
      </div>
      <div className="">
        <p className="intro ">PROGRAMMING LANGUAGES & TOOLS</p>
        <div className="programming_icons">
          <div className="">
            <img src={Html} alt="" />
          </div>
          <div className="">
            <img src={Css} alt="" />
          </div>
          <div className="">
            <img src={Js} alt="" />
          </div>
          <div className="">
            <img src={react} alt="" />
          </div>
          <div className="">
            <img src={Redux} alt="" />
          </div>
          <div className="">
            <img src={Php} alt="" />
          </div>
          <div className="">
            <img src={Sql} alt="" />
          </div>
          <div className="">
            <img src={Node} alt="" />
          </div>

          <div className="">
            <img src={Mysql} alt="" />
          </div>
          <div className="">
            <img src={Mongodb} alt="" />
          </div>

          <div className="">
            <img src={Sass} alt="" />
          </div>
          <div className="">
            <img src={Git} alt="" />
          </div>
          <div className="">
            <img src={Xampp} alt="" />
          </div>
          <div className="">
            <img src={npm} alt="" />
          </div>
          <div className="">
            <img src={Vscode} alt="" />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Qualities;
