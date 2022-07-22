/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import React, {useState, useContext} from "react";
import {View, StyleSheet, Pressable, ImageBackground} from "react-native";

import {launchCamera} from "react-native-image-picker";
import Icon from "react-native-vector-icons/FontAwesome5";

import Page from "../components/basic/Page";
import Text from "../components/basic/Text";
import DisplayName from "../components/popups/displayName";

import {theme} from "../themes/default";

import {UserContext} from "../context/userContext";

import {userIcon} from "../utils/assets";
import {Toast, isPhone} from "../utils/utils";
import {Storage, Firestore, uploadImage} from "../utils/firebase";

const Profile = ({navigation}) => {
    const {authInfo, userInfo} = useContext(UserContext);

    const [displayName, setDisplayName] = useState(userInfo.displayName);
    const [showDisplayNameModal, setShowDisplayNameModal] = useState(false);

    const [profilePicture, setProfilePicture] = useState(userInfo.photoURL.length ? {uri : userInfo.photoURL} : userIcon);

    const hideDisplayNameModal = async (flag, text) => {
        setShowDisplayNameModal(false);

        if(flag === true && text.length > 0) {

            await Firestore.collection("users").doc(userInfo.userId).update({
                displayName : text,
            });
            setDisplayName(text);
        }
    };

    const changeProfilePicture = () => {

        async function callback(response) {

            if(response.didCancel) {

                Toast("Cancelled by user.");

            } else if(response.errorCode) {

                Toast(response.errorMessage);

            } else {
                let task = await uploadImage(response.assets[0].uri, "images/profilepictures");

                if(task.state === "success") {

                    Storage.ref(task.fileName).getDownloadURL().then(async (url) => {

                        await Firestore.collection("users").doc(userInfo.userId).update({
                            photoURL : url,
                        });
                        
                        setProfilePicture({uri : response.assets[0].uri});
                        
                    }).catch((e) => {

                        Toast(e.message);
                        setProfilePicture(defaultProfilePic);
                        
                    });                    

                } else {

                    setProfilePicture(defaultProfilePic);
                    Toast("Profile picture upload failed.");

                } 
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

    return (
        <Page style={styles.page}>

            {showDisplayNameModal && <DisplayName text={displayName} hideDisplayNameModal={hideDisplayNameModal} />}

            <View style={styles.profilePictureWrapper}>
                <ImageBackground resizeMode="cover" style={styles.profilePicture} source={profilePicture}/>

                <Pressable style={styles.cameraIconWrapper} onPress={changeProfilePicture}>
                    <Icon style={styles.cameraIcon} name={"camera"}  />
                </Pressable>
            </View>
            
            <Pressable style={styles.contentWrapper} onPress={() => setShowDisplayNameModal(true)}>
                <Icon name={"user-alt"} style={styles.icon} />
                <Text value={displayName} />
                <Icon name={"pen"} style={styles.icon} />
            </Pressable>

            <Pressable style={styles.contentWrapper}>
                <Icon name={"envelope"} style={styles.icon} />
                <Text value={authInfo.email} />
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