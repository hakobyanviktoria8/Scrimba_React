import React from "react"
import {hoc} from "./HoC";

function InfoCallout(props) {
    {console.log(props)}

    return (
        <div>
            <h2>{props.header}</h2>
            <p>{props.body}</p>
            <h1>{props.name}</h1>
            <p>{props.favoriteNumber}</p>
        </div>
    )
}

export default hoc(InfoCallout)