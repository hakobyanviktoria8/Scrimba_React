import React from "react";
import UserContext from "./UserContext"

const Header = () => {
    return (
        <UserContext.Consumer>
            {
                user => (
                    <>
                        <h1>Header</h1>
                        <div>{user}</div>
                    </>
                )
            }
        </UserContext.Consumer>
    )
};

export default Header