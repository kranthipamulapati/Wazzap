import React, {useState, createContext} from "react";

const GlobalContext = createContext();

const ContextProvider = ({children}) => {

    const [user, setUser] = useState({});
    const value = {user, setUser};

    return <GlobalContext.Provider value={value}>
        {children}
    </GlobalContext.Provider>
}

export {GlobalContext, ContextProvider};