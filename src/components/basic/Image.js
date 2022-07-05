/*
 * Wazzap React Native App
 * kranthipamulapati.com
 */

/*
 * Properties
 */

import React from "react";
import {Image as RNImage, StyleSheet} from "react-native";

const Image = ({src}) => {

    return (
        <RNImage style={styles.img} source={require("../../assets/welcome-img.png")} />
    );
};

const styles = StyleSheet.create({
    img : {
        flex : 1
    }
});

export default Image;