/*
 * Wazzap React Native App
 * kranthipamulapati.com
 */

/*
 * Properties
 *  label
 *  value
 *  error
 *  editable
 *  disabled
 *  textAlign  
 *  maxLength
 *  placeholder
 *  defaultValue
 *  keyboardType
 */

import React from "react";
import {StyleSheet} from "react-native";

import {Button as PaperButton} from "react-native-paper";

const Button = ({text, onPress, style = {}, ...rest}) => {

    return (
        <PaperButton onPress={onPress} style={{...styles.button, ...style}} {...rest} mode="contained">{text}</PaperButton>
    );
};

const styles = StyleSheet.create({
    button : {
        fontSize : 16,
    }
});

export default Button;