import React, { useContext } from "react";
import { greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import "./badge.scss";

function Badge({ splashScreen }) {
    const { isDark } = useContext(StyleContext);
    const baseUrl = process.env.PUBLIC_URL || '/';
    
    // Define props based on whether it's splash screen or header
    const Component = splashScreen ? 'div' : 'a';
    const componentProps = { className: `splash-title-container ${isDark ? 'dark-theme' : 'light-theme'}` }
    if (!splashScreen) {
        componentProps.href = baseUrl; 
        componentProps.className = "logo";
    } 
    
    const textClassName = splashScreen ? "splash-title" : "logo-name";

    return (
        <Component {...componentProps}>
            <span className="grey-color"> &lt;</span>
            <span className={textClassName}>{greeting.username}</span>
            <span className="grey-color">/&gt;</span>
        </Component>
    );
}

export default Badge