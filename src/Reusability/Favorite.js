import React, {Component} from "react"
import {withToggler} from "./withToggle";

function Favorite(props) {

    return (
        <div>
            <h3>Click heart to favorite</h3>
            <h1>
                    <span
                        onClick={props.toggleFavorite}
                    >
                        hi
                        {props.isFavorited ? "❤️" : "♡"}
                    </span>
            </h1>
        </div>
    )

}

export default withToggler(Favorite, false)