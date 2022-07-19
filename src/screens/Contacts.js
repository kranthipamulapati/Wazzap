/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import React, {useContext} from "react";

import Page from "../components/page/Page";

import useContacts from "../hooks/useContacts";

import {UserContext} from "../context/userContext";

const Contacts = ({navigation}) => {

    const {authInfo} = useContext(UserContext);

    const contacts = useContacts(authInfo.uid);
    console.log(contacts);
    
    return (
        <Page>
            
        </Page>
    );
};

export default Contacts;