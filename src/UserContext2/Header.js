import React from "react";
import UserContext2 from "./userContext2";

const Header = () => {
    return (
        <UserContext2.Consumer>
            {
                user => (
                    <p>User name is {user}</p>
                )
            }
        </UserContext2.Consumer>
    )
};

export default Header