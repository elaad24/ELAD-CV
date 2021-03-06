import React from "react";

const Header = () => {
  return (
    <div className="header" id="about" name="about">
      <h1>
        <span className="firstName"> ELAD</span>{" "}
        <span className="lastName">DADON</span>{" "}
      </h1>
      <h3 className="personalInfo">
        <a
          href="https://goo.gl/maps/hAudY1zPTeGT53nBA"
          target="_blank"
          rel="noreferrer"
        >
          Israel-Rishon LeZion
        </a>
        <br />
        <a href="tel:+97224893127">+972 24893127 </a>
        <br />
        <a href="mailto:elaad2408@gmail.com">ELAAD2408@GMAIL.COM</a>
      </h3>

      <p className="intro ">
        Industrious and enthusiastic Full Stack Web Developer.
      </p>
    </div>
  );
};

export default Header;
