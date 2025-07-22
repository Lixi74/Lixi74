import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import Badge from "../badge/badge";
import {
  // greeting,
  workExperiences,
  skillsSection,
  // openSource,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  // const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <Badge splashScreen={false} />
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#habilidades">Habilidades</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experiencia">Experiencia Laboral</a>
            </li>
          )}
          {/* {viewOpenSource && (
            <li>
              <a href="#opensource">Open Source</a>
            </li>
          )} */}
          {viewAchievement && (
            <li>
              <a href="#reconocimientos">Reconocimientos</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#publicaciones">Publicaciones</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#ponencias">Ponencias</a>
            </li>
          )}
          {viewResume && (
            <li>
              <a href="#resumen">Resumen</a>
            </li>
          )}
          <li>
            <a href="#contactame">Contáctame</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
