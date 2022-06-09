import React, {memo} from "react";
import {View, StyleSheet} from "react-native"

import CheckBox from "@react-native-community/checkbox";

import Text from "src/components/basic/Text";

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
            <Text value={label} />
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