import React, {useState, useEffect} from "react";
import {View, Image, Pressable, StyleSheet} from "react-native";

import {useNavigation} from "@react-navigation/native";

import Text from "./basic/Text";

import {userIcon} from "../utils/assets";
import {getUserByUserId} from "../utils/firebase";

function ChatCard({contactId, lastMessage}) {
    const navigation = useNavigation();

    const [contact, setContact] = useState({
        photoURL : "",
        displayName : "",
    });
    const [profilePicture, setprofilePicture] = useState(userIcon);

    useEffect(() => {

        async function getContact() {
            let result = await getUserByUserId(contactId);
            setContact(result);
        }

        getContact();
    }, []);

    useEffect(() => {
        if(contact.photoURL) {
            setprofilePicture({uri : contact.photoURL});
        }
    }, [contact]);

    return <Pressable style={styles.contact} onPress={() => navigation.navigate("Chat", {contact : contact})} >

        <Image style={styles.tinyLogo} source={profilePicture} />

        <View style={{flexDirection : "column"}}>
            <Text style={{fontWeight : "bold"}} value={contact.displayName} />
            <Text style={{fontSize : 12}} value={lastMessage} />
        </View>
        
    </Pressable>
}

const styles = StyleSheet.create({
    tinyLogo : {
        width: 40,
        height: 40,
        marginRight: 10,
        borderRadius : 25,
    },
    contact : {
        flexDirection : "row",
        borderColor: "gray",
        padding: 5,
        marginVertical: 5,
        marginHorizontal: 15,
        alignItems : "center",
        borderWidth : 1,
        borderColor : "gray"
    }
});

export default ChatCard;