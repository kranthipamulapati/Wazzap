import React from "react";
import {Image, Pressable, StyleSheet} from "react-native";

import Text from "./basic/Text";

import {userIcon} from "../utils/assets";

function ContactCard({contact, onPress}) {

    const profilePicture = contact.photoURL.length ? {uri : contact.photoURL} : userIcon;

    return <Pressable style={styles.contact} onPress={onPress}>
        <Image style={styles.tinyLogo} source={profilePicture} />
        <Text value={contact.displayName} />
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
        alignItems : "center"
    }
});

export default ContactCard;