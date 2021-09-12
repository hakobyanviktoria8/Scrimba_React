import React, {Component} from "react"

const {Provider, Consumer} = React.createContext()

class ThemeContextProvider extends Component {
    state = {
        theme: "dark"
    }
    toggleTheme = () => {
        this.setState(x => {
            return {
                theme: x.theme === "light" ? "dark" : "light"
            }
        })
        console.log(this.state.theme)
    }

    render() {
        return (
            <Provider value={{theme: this.state.theme, toggleTheme: this.toggleTheme}}>
                {this.props.children}
                {/*change dark and light mode in switch button*/}
                {/*<button onClick={this.toggle}>Change</button>*/}
            </Provider>
        )
    }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}