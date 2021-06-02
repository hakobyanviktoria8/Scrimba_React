import React from "react"
import {ContextProvider} from "./ContextProvider";

export function Context(props) {
    const CreateContextProvider = React.createContext();
    console.log("CreateContextProvider", CreateContextProvider);
    return (
        <div>
            <h1>Context</h1>
            <hr/>
            <CreateContextProvider.Provider value = {"light"}>
                <ContextProvider/>
            </CreateContextProvider.Provider>
        </div>
    )
}