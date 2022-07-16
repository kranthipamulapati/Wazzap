import React, {useState, useEffect, createContext} from "react";

import {Auth} from "../utils/firebase";

const UserContext = createContext();

const UserProvider = ({children}) => {
    
    const [user, setUser] = useState(null);
    const value = {user, setUser};

    useEffect(() => {

        const authListener = Auth.onAuthStateChanged((User) => {
            setUser(User);
        });

        return authListener;
    }, []);

    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}

export {UserContext, UserProvider};