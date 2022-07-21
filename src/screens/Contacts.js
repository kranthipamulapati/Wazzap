/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import React, {useContext} from "react";
import {FlatList} from "react-native";

import Page from "../components/page/Page";
import ContactCard from "../components/ContactCard";

import useContacts from "../hooks/useContacts";

import {UserContext} from "../context/userContext";

const Contacts = ({navigation}) => {

    const {authInfo} = useContext(UserContext);
    const contacts = useContacts(authInfo.uid);

    function renderItem({item}) {
        return <ContactCard contact={item} onPress={() => navigation.navigate("Chat", {contact : item})} />
    }
    
    return (
        <Page>
            <FlatList data={contacts} renderItem={renderItem} keyExtractor={item => item.docId} />
        </Page>
    );
};

export default Contacts;