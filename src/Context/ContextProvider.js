import React from "react";
import Button from "./Button";
import Header from "./Header";

export function ContextProvider(props) {
    return(
        <div>
            <h1>Context</h1>
            <h2>Context Provider- մատակարարը</h2>
            <hr/>
            <Header/>
            <Button/>
        </div>
    )
}