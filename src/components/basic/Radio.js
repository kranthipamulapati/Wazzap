import React, {memo} from "react";
import {View, StyleSheet} from "react-native";

import RadioForm, {RadioButton, RadioButtonLabel, RadioButtonInput} from "react-native-simple-radio-button";

import {isPhone} from "../../utils/utils";
import {theme} from "../../themes/default";

import Text from "./Text";

const Radio = ({label, initial, onPress, mandatory, radio_props, disabled = false}) => {

    return (
        <View>
            {label && <Text value={label} />}

            <View>
                <RadioForm style={styles.radio} formHorizontal={isPhone ? false : true} animation={true}>
                    {
                        radio_props.map((obj, index) => (
                            <RadioButton labelHorizontal={true} key={index}>
                                <RadioButtonInput
                                    obj={obj}
                                    index={index}
                                    isSelected={initial===index}
                                    onPress={value => !disabled && onPress(value)}
                                    borderWidth={2}
                                    buttonInnerColor={theme.colors.primary}
                                    buttonOuterColor={theme.colors.primary}
                                    buttonSize={20}
                                    buttonOuterSize={30}
                                    buttonWrapStyle={{marginLeft : 10}}/>
                                <RadioButtonLabel
                                    obj={obj}
                                    index={index}
                                    labelHorizontal={true}
                                    onPress={value => !disabled && onPress(value)}
                                    labelStyle={styles.labelStyle}/>
                            </RadioButton>
                        ))
                    }
                </RadioForm>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    radio : {
        flexWrap : "wrap",
    },
    labelStyle : {
        fontSize : 16,
        color : "#5e5e5e"
    }
});

export default memo(Radio);