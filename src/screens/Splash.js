/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import React, {useEffect, useContext} from "react";
import {StyleSheet} from "react-native";

import Page from "../components/page/Page";
import Image from "../components/basic/Image";

import {UserContext} from "../context/userContext";

const Splash = ({navigation}) => {

    const User = useContext(UserContext);

    useEffect(() => {
        if(User) {
            navigation.navigate("Profile");
        } else {
            navigation.navigate("Signin");
        } 
    }, [User]);

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