import React, {useContext} from "react";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import "./badge.scss";

function Badge({splashScreen}) {
  const {isDark} = useContext(StyleContext);
  const baseUrl = process.env.PUBLIC_URL || "/";

  // Define props based on whether it's splash screen or header
  const Component = splashScreen ? "div" : "a";
  const themeClass = isDark ? "dark-theme" : "light-theme";
  const componentProps = {className: `splash-title-container ${themeClass}`};
  if (!splashScreen) {
    componentProps.href = baseUrl;
    componentProps.className = `logo ${themeClass}`;
  }

  // SVG pentagram with treble clef
  // Responsive width/height
  const svgHeight = splashScreen ? 100 : 70;
  const svgWidth = splashScreen ? 400 : 260;

  // Use CSS classes for pentagram colors
  const pentagramClass = isDark ? "pentagram-dark" : "pentagram-light";

  // Username container classes
  const usernameContainerClass = `username-container ${
    splashScreen ? "username-splash" : "username-header"
  } ${themeClass}`;

  return (
    <Component
      {...componentProps}
      style={{display: "flex", alignItems: "center", justifyContent: "center"}}
    >
      <svg
        width={svgWidth}
        height={svgHeight}
        viewBox={`0 0 400 100`}
        style={{flex: 1, maxWidth: "100%", height: "auto"}}
        aria-label="Pentagrama con clave de sol"
        className={pentagramClass}
      >
        {/* Pentagram lines */}
        {[0, 1, 2, 3, 4].map(i => (
          <line
            key={i}
            x1="30"
            x2="370"
            y1={15 + i * 16}
            y2={15 + i * 16}
            className="pentagram-line"
            strokeWidth="2.5"
          />
        ))}
        {/* Treble clef using Unicode character */}
        <text
          x="80"
          y="60"
          fontSize="72"
          textAnchor="middle"
          dominantBaseline="middle"
          className="treble-clef"
        >
          𝄞
        </text>
        {/* Username centered in the pentagram */}
        <foreignObject x="90" y="10" width="300" height="100">
          <div className={usernameContainerClass}>{greeting.username}</div>
        </foreignObject>
      </svg>
    </Component>
  );
}

export default Badge;
