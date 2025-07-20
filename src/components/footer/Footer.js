import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Basado en ")}
          <a
            href="https://github.com/saadpasta/developerFolio"
            target="_blank"
            rel="noreferrer"
          >
            {emoji("DeveloperFolio 🚀")}
          </a>
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Adaptado y desarrollado por ")}
          <a
            href="https://github.com/Daga321"
            target="_blank"
            rel="noreferrer"
          >
            {emoji("Daga321 👨‍💻")}
          </a>
        </p>
      </div>
    </Fade>
  );
}
