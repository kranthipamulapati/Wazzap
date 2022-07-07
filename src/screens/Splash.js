/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import React, {useEffect} from "react";
import {StyleSheet} from "react-native";

import auth from "@react-native-firebase/auth";

import Page from "../components/page/Page";

import Image from "../components/basic/Image";

const Splash = ({navigation}) => {

    useEffect(() => {
        auth().onAuthStateChanged((User) => {
            
            if(User) {
                navigation.navigate("Profile");
            } else {
                navigation.navigate("Signin");
            } 
            
        });
    }, []);

    return (
        <Page style={styles.center}>
            <Image source={require("../assets/Android/icons8-whatsapp-192.png")} />
        </Page>
    );
};

const styles = StyleSheet.create({
    center : {
        alignItems : "center",
        justifyContent : "center"
    }
});
 
export default Splash;