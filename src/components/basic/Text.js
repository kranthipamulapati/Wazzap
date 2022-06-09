import React, {memo} from "react";
import {Text as TextView, StyleSheet} from "react-native";

const Text = ({value, style}) => {
    return (
        <TextView style={{...styles.text, ...style}}>{value}</TextView>
    );
};

const styles = StyleSheet.create({
    text : {
        fontSize : 16,
        color    : "#181A18",
    }
});

export default memo(Text);