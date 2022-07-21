/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import React, {useContext} from "react";
import {Text, FlatList, Pressable, StyleSheet} from "react-native";

import Page from "../components/page/Page";

import useContacts from "../hooks/useContacts";

import {UserContext} from "../context/userContext";

const Contacts = ({navigation}) => {

    const {authInfo} = useContext(UserContext);
    const contacts = useContacts(authInfo.uid);

    function renderItem({item}) {
        return <Pressable style={styles.item} onPress={() => navigation.navigate("Chat", item)}>
            <Text style={styles.title}>{item.displayName}</Text>
        </Pressable>
    }
    
    return (
        <Page>
            <FlatList data={contacts} renderItem={renderItem} keyExtractor={item => item.docId} />
        </Page>
    );
};

const styles = StyleSheet.create({
    item : {
        height : 80,
        borderColor: "gray",
        borderWidth : 1,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title : {
        fontSize: 32,
    }
});

export default Contacts;