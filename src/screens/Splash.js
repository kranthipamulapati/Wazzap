/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import React from "react";
import {StyleSheet} from "react-native";

import Page from "../components/basic/Page";
import Image from "../components/basic/Image";

const Splash = () => {
    
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