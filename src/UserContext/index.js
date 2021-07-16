import React, {useState} from "react";
import UserContext from "./UserContext"
import Header from "./Header";

const UserContextProvider = () => {
    const [name, setName]= useState("")
    const handleChange = (e)=>{
        setName(e.target.value);
    }
    return (
        <UserContext.Provider value={name}>
            <Header/>
            <h1>Welcome {name}!</h1>
            <input type="text" name="user" value={name} onChange={handleChange}/>
            <button>Change User Name</button>
        </UserContext.Provider>
    )
};

export default UserContextProvider