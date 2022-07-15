import React, {useState, useEffect, createContext} from "react";

import {Auth} from "../utils/firebase";

const UserContext = createContext();

const UserProvider = ({children}) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const authListener = Auth.onAuthStateChanged((User) => {
            setUser(User);
        });

        return authListener;
    }, []);

    return <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
}

export {UserContext, UserProvider};