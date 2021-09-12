import React from "react";

export function hoc(component) {
    const Component = component;
    return function (props) {
        return (
            <Component {...props} name={"HOC_NAME"} favoriteNumber="864"/>
        )
    }
}