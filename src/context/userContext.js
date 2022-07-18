import React, {createContext} from "react";

import useUser from "../hooks/useUser";
import useAuthListener from "../hooks/useAuthListener";

const UserContext = createContext();

const UserProvider = ({children}) => {
    
    const authInfo = useAuthListener();
    const userInfo = useUser(authInfo?.uid);

    const value = {authInfo, userInfo};

    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}

export {UserContext, UserProvider};