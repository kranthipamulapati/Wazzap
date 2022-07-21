import React from "react";
import {Image, Pressable, StyleSheet} from "react-native";

import {useRoute, useNavigation} from "@react-navigation/native";

import Text from "./basic/Text";

function ContactCard() {

    const route = useRoute();
    const navigation = useNavigation();

    const {contact} = route.params;
    const profilePicture = contact.photoURL.length ? {uri : contact.photoURL} : require("../assets/welcome-img.png");

    return <Pressable style={styles.contact} onPress={() => navigation.navigate("Contact", {contact})}>
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