import React, {memo} from "react";
import {View, StyleSheet} from "react-native";

import {Picker} from "@react-native-picker/picker";

const Select = ({
        style = {},
        options = [],
        enabled = true,
        value = "",
        itemLabel = "",
        itemValue = "",
        itemDefault = {label : "Select", value : ""},
        onChange = ()=>{},
    }) => {

    return (
        <View style={{...styles.container, ...style}}>

            <Picker selectedValue={value} enabled={enabled} style={styles.picker} onValueChange={onChange}>
                <Picker.Item key={options.length} label={itemDefault.label} value={itemDefault.value} enabled={false} />

                {options.map(function(item, index) {
                    return <Picker.Item key={index} label={item[itemLabel]} value={item[itemValue]} />
                })}
                
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    picker : {
        marginVertical : "-1.5%",
    },
    container : {
        borderWidth : 1,
        borderRadius : 2.5,
        borderColor : "#b4b4b4",
        marginVertical : "3.25%",
    },
});

export default memo(Select);