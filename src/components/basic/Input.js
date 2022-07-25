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

import React, {memo} from "react";
import {StyleSheet} from "react-native";

import {TextInput} from "react-native-paper";

import {theme} from "../../utils/themes";

const Input = ({
        leftNode, 
        rightNode,
        style     = {},
        NOL       = 1, 
        maxLength = 50,
        error     = false, 
        disabled  = false, 
        multiline = false, 
        mandatory = false, 
        onChange  = ()=>{},
        ...rest
    }) => {    

    const renderNode = (node) => {
        if(node.type === "icon") {
            return <TextInput.Icon name={node.value} />
        } else if(node.type === "text") {
            return <TextInput.Affix text={node.value} />
        }
    };

    return (
        <>
            <TextInput mode="outlined" style={{...styles.input, ...style}} {...rest}
                dense
                numberOfLines      = {NOL}
                error              = {error}
                disabled           = {disabled}
                multiline          = {multiline}
                maxLength          = {maxLength}
                onChangeText       = {onChange}
                outlineColor       = {mandatory ? "red" : "#cecece"}
                activeOutlineColor = {mandatory ? "red" : theme.colors.primary}
                {...(leftNode && {left : renderNode(leftNode)})}
                {...(rightNode && {right : renderNode(rightNode)})}
            />
        </>
    );
};

const styles = StyleSheet.create({
    input : {
        padding : 0,
        fontSize : 16,
        marginVertical : "1.5%"
    }
});

export default memo(Input);
