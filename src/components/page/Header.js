/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import React, {memo} from "react";
import {StyleSheet} from "react-native";

import {Appbar} from "react-native-paper";

import Title from "../basic/Title";

const Header = ({children}) => {

    return (
        <Appbar style={styles.header}>
            <Title style={styles.title} text={"Wazzap"}></Title>
            {children}
        </Appbar>
    );
};

const styles = StyleSheet.create({
    title : {
        color : "white"
    },
    header : {
        top    : 0,
        left   : 0,
        right  : 0,
        zIndex : 1,
        height : "7.5%",
        position : "absolute",
    }
});

export default Header;