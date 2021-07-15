import React from "react"
import {ContextProvider} from "./ContextProvider";
import "./Context.css";
import ThemeContext from "./themeContext";

export function Context(props) {
    return (
        <div>
            <ThemeContext.Provider value={"dark"}>
                <ContextProvider/>
            </ThemeContext.Provider>
        </div>
    )
}