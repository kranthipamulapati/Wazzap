import React, {memo} from "react";
import {Text, StyleSheet} from "react-native";

const Label = ({text, style}) => {
    return (
        <Text style={{...styles.text, ...style}}>{text}</Text>
    );
};

const styles = StyleSheet.create({
    text : {
        fontSize : 16,
        color    : "#181A18",
    }
});

export default memo(Label);