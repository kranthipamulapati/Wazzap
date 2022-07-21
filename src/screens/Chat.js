/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import React, {useState, useEffect, useContext} from "react";
import {Pressable, StyleSheet} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";

import {theme} from "../themes/default";

import Page from "../components/page/Page";

import {Firestore} from "../utils/firebase";

import {UserContext} from "../context/userContext";

const Chat = ({navigation}) => {

    const {authInfo, userInfo} = useContext(UserContext);

    const [chat, setChat] = useState({});

    useEffect(() => {

        async function getChat() {
            let chat = [], results = await Firestore.collection("chats").where("participants", "array-contains", authInfo.uid).get();
            
            results.forEach((chat) => rooms.push({
                ...chat.data(),
                docId : chat.id
            }));
            setChat(rooms);
        }

        getChat();
    }, []);
    
    return (
        <Page>
        </Page>
    );
};

const styles = StyleSheet.create({
});

export default Chat;