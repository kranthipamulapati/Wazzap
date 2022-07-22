/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import React, {useState, useEffect, useContext} from "react";
import {View, Pressable, StyleSheet} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";

import Page from "../components/basic/Page";

import ChatCard from "../components/ChatCard";

import {theme} from "../themes/default";

import {Firestore} from "../utils/firebase";

import {UserContext} from "../context/userContext";
 
const Chats = ({navigation}) => {

    const [chats, setChats] = useState([]);
    const {authInfo} = useContext(UserContext);

    useEffect(() => {

        async function getChats() {
            let rooms = [], results = await Firestore.collection("chats").where("participants", "array-contains", authInfo.uid).get();
            
            results.forEach((chat) => rooms.push({
                ...chat.data(),
                docId : chat.id
            }));
            setChats(rooms);
        }

        getChats();
    }, []);
    
    return (
        <Page>

            <Pressable style={styles.contactIconWrapper} onPress={() => navigation.navigate("Contacts")}>
                <Icon style={styles.contactIcon} name={"address-book"} />
            </Pressable>

            {chats.map((chat) => 
                <ChatCard key={chat.docId} onPress={() => navigation.navigate("Chat", {contact : chat.participants})} contactId={chat.participants} lastMessage={chat.lastMessage} />
            )}
        </Page>
    );
};

const styles = StyleSheet.create({
    contactIcon : {
        fontSize : 24,
        color : "white",
    },
    contactIconWrapper : {
        width : 50,
        height : 50,
        position: "absolute",
        top: "90%",
        right: "2.5%",
        backgroundColor : theme.colors.primary,
        borderRadius : 25,
        justifyContent: "center",
        alignItems : "center"
    }
});

export default Chats;