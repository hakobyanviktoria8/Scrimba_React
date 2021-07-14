import React, {Component} from "react"
import ThemeContext from "./themeContext";

class Header extends Component {
    render() {
        const theme = this.context[0].toUpperCase()+this.context.slice(1);
        return (
            <header className={`${this.context}-theme`}>
                <h2>{theme} Theme</h2>
                {/*another vay*/}
                <p>{theme === "Light" ? "Light" : "Dark"} Theme</p>
            </header>
        )
    }
}

Header.contextType = ThemeContext
export default Header