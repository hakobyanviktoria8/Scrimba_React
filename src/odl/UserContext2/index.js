import React from "react";
import UserContext2 from "./userContext2";
import Header from "./Header";

const UserContext2Provider = () => {
    return (
        <UserContext2.Provider value="Anna">
            <Header/>
        </UserContext2.Provider>
    )
};

export default UserContext2Provider