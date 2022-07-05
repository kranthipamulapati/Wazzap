import React, {useState, createContext} from "react";

const GlobalContext = createContext();

const initialState = {
    Email: "",
    Password: "",
    Info : {}
};

const ContextProvider = ({children}) => {

    const [user, setUser] = useState(initialState);
    const value =  {
        user,
        setUser
    };

    return <GlobalContext.Provider value={value}>
        {children}
    </GlobalContext.Provider>
}

export {initialState, GlobalContext, ContextProvider};