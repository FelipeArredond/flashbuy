import React, { createContext, useState } from "react";

export const userContext = createContext();

export default function  UserContext({children}){

    const [userData, setUserData] = useState({
        name: "",
        id: ""
    })

    return <userContext.Provider value={{
        userData,
        setUserData
    }}>
        {children}
    </userContext.Provider>
}