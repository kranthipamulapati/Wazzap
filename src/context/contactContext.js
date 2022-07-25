import React, {useState, createContext} from "react";

const ContactContext = createContext();

const ContactProvider = ({children}) => {

    const [contact, setContact] = useState(null);
    const value = {contact, setContact};

    return <ContactContext.Provider value={value}>
        {children}
    </ContactContext.Provider>
}

export {ContactContext, ContactProvider};