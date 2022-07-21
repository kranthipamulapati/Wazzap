/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import React, {useState, useEffect, useContext} from "react";
import {Pressable, StyleSheet} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";

import Page from "../components/page/Page";

import {theme} from "../themes/default";

import {Firestore} from "../utils/firebase";

import {UserContext} from "../context/userContext";
 
const Chats = ({navigation}) => {

    const {authInfo, userInfo} = useContext(UserContext);

    const [chats, setChats] = useState([]);

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
                <Icon style={styles.contactIcon} name={"address-book"}  />
            </Pressable>
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