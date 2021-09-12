import React from "react";
import ThemeContext from "./themeContext";

const Text = () => {
    return (
        <ThemeContext.Consumer>
            {theme=>(
                <h1>{theme} text</h1>
            )}
        </ThemeContext.Consumer>
    )
};

export default Text