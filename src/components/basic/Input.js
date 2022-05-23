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

import {TextInput} from "react-native-paper";

const Input = ({style = {}, ...rest}) => {

    return (
        <TextInput mode="outlined" style={{...styles.input, ...style}} {...rest} />
    );
};

const styles = StyleSheet.create({
    input : {
        margin : 10,
        padding : 0,
        fontSize : 16,
    }
});

export default Input;