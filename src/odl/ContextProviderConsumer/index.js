import React from "react";
import {ThemeContextProvider} from "./themeContext";
import Header from "./Header";
import "./ContextProviderConsumer.css";
import Button from "./Button";

const ContextProviderConsumer = () => {
    return (
        <ThemeContextProvider>
            <Header/>
            <Button/>
        </ThemeContextProvider>
    )
};

export default ContextProviderConsumer