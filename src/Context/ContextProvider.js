import React from "react";
import Button from "./Button";
import Header from "./Header";
import ThemeContext from "./themeContext";

export function ContextProvider(props) {
    return (
        <div>
            <h1>Context</h1>
            <h2>Context Provider- մատակարարը</h2>
            <hr/>
            <Header/>
            <ThemeContext.Consumer>
                {theme =>
                    <div>
                        <Button theme={theme}/>
                        <Button theme={theme}/>
                        <Button theme={theme}/>
                    </div>
                }
            </ThemeContext.Consumer>
            <Button theme="light"/>
        </div>
    )
}