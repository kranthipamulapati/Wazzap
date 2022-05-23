/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import * as React from "react";
import {StyleSheet} from "react-native";

import {Appbar} from "react-native-paper";

const Footer = (props) => {

    return (
        <Appbar style={styles.footer}>
            {props.children}
        </Appbar>
    );
};

const styles = StyleSheet.create({
    footer : {
        left   : 0,
        right  : 0,
        bottom : 0,
        zIndex : 1,
        height : "7.5%",
        position : "absolute",
    }
});

export default Footer;