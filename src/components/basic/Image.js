/*
 * Wazzap React Native App
 * kranthipamulapati.com
 */

/*
 * Properties
 */

import React from "react";
import {Image as RNImage, StyleSheet} from "react-native";

const Image = ({source}) => {

    return (
        <RNImage resizeMode="center" style={styles.img} source={source} />
    );
};

const styles = StyleSheet.create({
    img : {
        flex : 1
    }
});

export default Image;