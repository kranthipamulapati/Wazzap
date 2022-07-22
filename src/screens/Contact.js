/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import React from "react";
import {View, Pressable, StyleSheet, ImageBackground} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";

import Page from "../components/basic/Page";
import Text from "../components/basic/Text";

import {isPhone} from "../utils/utils";
import {userIcon} from "../utils/assets";

const Profile = ({route, navigation}) => {

    const contact = route.params.contact;
    const profilePicture = contact.photoURL.length ? {uri : contact.photoURL} : userIcon;

    return (
        <Page style={styles.page}>

            <View style={styles.profilePictureWrapper}>
                <ImageBackground resizeMode="cover" style={styles.profilePicture} source={profilePicture}/>
            </View>
            
            <Pressable style={styles.contentWrapper}>
                <Icon name={"user-alt"} style={styles.icon} />
                <Text value={contact?.displayName} />
                <View></View>
            </Pressable>

            <Pressable style={styles.contentWrapper}>
                <Icon name={"envelope"} style={styles.icon} />
                <Text value={contact?.emailAddress} />
                <View></View>
            </Pressable>

        </Page>
    );
};

const styles = StyleSheet.create({
    page : {
        paddingHorizontal : isPhone ? "10%" : "35%",
    },
    profilePictureWrapper : {
        height: 240,
        marginVertical : 20,
        justifyContent : "center",
        alignItems : "center",
    },
    profilePicture : {
        width: "100%",
        height: "100%",
    },
    contentWrapper : {
        height: "10%",
        flexDirection : "row",
        borderBottomWidth : 1,
        borderBottomColor : "#D3D3D3",
        justifyContent : "space-between",
        alignItems : "center"
    },
    icon : {
        fontSize : 16
    },
});

export default Profile;