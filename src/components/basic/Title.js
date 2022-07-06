/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import * as React from "react";
import {Text, StyleSheet} from "react-native";

const Title = ({text, style}) => {

    return (
        <Text style={{...styles.title, ...style}}>{text}</Text>
    );
};

const styles = StyleSheet.create({
    title : {
        fontSize : 24,
        fontWeight : "bold",
        alignSelf : "center"
    }
});

export default Title;