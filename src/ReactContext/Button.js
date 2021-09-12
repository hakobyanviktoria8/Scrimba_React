import React from "react";
import ThemeContext from "./themeContext";

const Button = () => {
    return (
        <ThemeContext.Consumer>
            {theme=>(
                <button className={`${theme}-theme`}>Click me</button>
            )}
        </ThemeContext.Consumer>
    )
};

export default Button