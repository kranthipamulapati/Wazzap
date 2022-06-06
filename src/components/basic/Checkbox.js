import React, {memo} from "react";
import {View, StyleSheet} from "react-native"

import CheckBox from "@react-native-community/checkbox";

import Label from "src/components/basic/Label";

const Checkbox = ({
        label = "",
        style = {},
        value = false, 
        disabled = false,
        onChange = ()=>{},
        ...rest
    }) => {

    return (
        <View style={{...styles.container, ...style}} {...rest}>
            <CheckBox value={value} disabled={disabled} onValueChange={onChange} style={styles.checkbox} />
            <Label text={label} />
        </View>
    )
}

const styles = StyleSheet.create({
    checkbox : {
        marginRight : 5,
        transform : [{scaleX : 1.5}, {scaleY : 1.5}],
    },
    container : {
        flexDirection : "row",
        alignItems : "center"
    }
});

export default memo(Checkbox);