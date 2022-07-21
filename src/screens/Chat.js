/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import React, {useState, useEffect, useContext} from "react";
import {StyleSheet} from "react-native"; 

import Page from "../components/page/Page";

import {Firestore} from "../utils/firebase";

import {UserContext} from "../context/userContext";

const Chat = ({route, navigation}) => {
    const contact = route.params.contact;
    
    const [chat, setChat] = useState({});
    const {authInfo, userInfo} = useContext(UserContext);

    useEffect(() => {

        async function getChat() {
            let rooms = [], results = await Firestore.collection("chats").where("participants", "array-contains-any", [authInfo.uid, contact.docId]).get();
            
            results.forEach((chat) => rooms.push({
                ...chat.data(),
                docId : chat.id
            }));
            setChat(rooms[0]);
        }

        getChat();
        navigation.setOptions({title : contact.displayName});
    }, []);
    
    return (
        <Page>
        </Page>
    );
};

const styles = StyleSheet.create({
});

export default Chat;