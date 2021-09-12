import React from "react";
import ThemeContext from "./themeContext";
import "./ReactContext.css"
import Button from "./Button";
import Text from "./Text";

class ReactContext extends React.Component {
    static contextType = ThemeContext

    render() {
        console.log("Here", this.context)
        return (
            <div>
                <h1 className={`${this.context}-theme`}>ReactContext component</h1>
                <h2>{this.context === "light" ? "Light" : "Dark"} theme context here</h2>
                <p>Use <b>ReactContext.contextType = ThemeContext</b> or <b>static contextType = ThemeContext</b></p>
                <hr/>
                <Button/>
                <p>In function component we use ThemeContext.Consumer, then arrow function and theme el</p>
                <Text/>
            </div>
        )
    }
}

//contextType only Class component function is not valid
// ReactContext.contextType = ThemeContext

export default ReactContext