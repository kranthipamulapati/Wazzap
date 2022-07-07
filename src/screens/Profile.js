/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import React, {useState} from "react";
import {View, StyleSheet, Pressable, ImageBackground} from "react-native";

import auth from "@react-native-firebase/auth";
import Icon from "react-native-vector-icons/FontAwesome5";
import {launchCamera} from "react-native-image-picker";

import Page from "../components/page/Page";

import Text from "../components/basic/Text";

import {theme, Toast, isPhone, uploadImage} from "../global/utils";

const Profile = ({navigation}) => {
    const user = auth().currentUser;

    const [displayName, setDisplayName] = useState(user.displayName);
    const [profilePicture, setProfilePicture] = useState(user.photoURL || require("../assets/welcome-img.png"));

    const changeProfilePicture = () => {

        async function callback(response) {

            if(response.didCancel) {

                Toast("Cancelled by user.");

            } else if(response.errorCode) {

                Toast(response.errorMessage);

            } else {
                let flag = await uploadImage(response.assets[0].uri, "images/profilepictures");

                if(flag === false) setProfilePicture(require("../assets/welcome-img.png"));
                else if(flag === true) setProfilePicture({uri : response.assets[0].uri});
            }
        }

        let options = {
            includeBase64 : true,
            saveToPhotos  : true,
            mediaType     : "photo",
            quality       : 1
        };

        launchCamera(options, callback);
    };

    const changeDisplayName = () => {

    };

    return (
        <Page style={styles.page}>

            <View style={styles.profilePictureWrapper}>
                <ImageBackground resizeMode="cover" style={styles.profilePicture} source={profilePicture}/>

                <Pressable style={styles.cameraIconWrapper} onPress={changeProfilePicture}>
                    <Icon style={styles.cameraIcon} name={"camera"}  />
                </Pressable>
            </View>
            
            <Pressable style={styles.contentWrapper} onPress={changeDisplayName}>
                <Icon name={"user-alt"} style={styles.icon} />
                <Text value={displayName} />
                <Icon name={"pen"} style={styles.icon} />
            </Pressable>

            <Pressable style={styles.contentWrapper}>
                <Icon name={"envelope"} style={styles.icon} />
                <Text value={user.email} />
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
    cameraIcon : {
        fontSize : 24,
        color : "white",
    },
    cameraIconWrapper : {
        width : 50,
        height : 50,
        position: "absolute",
        top: "75%",
        right: "2.5%",
        backgroundColor : theme.colors.primary,
        borderRadius : 25,
        justifyContent: "center",
        alignItems : "center"
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