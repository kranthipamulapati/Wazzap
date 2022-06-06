import React, {memo, useRef, useEffect} from "react";
import {View, StyleSheet, Dimensions, ImageBackground} from "react-native";

import Orientation from "react-native-orientation-locker";

import {isPhone} from "src/utils/utils";

import Label from "../basic/Label";

const PageWithBg = ({title, children, ...rest}) => {
    const initialRender = useRef(true);

    useEffect(() => {
        if(initialRender.current) {

            if(isPhone) Orientation.lockToPortrait();
            else Orientation.lockToLandscapeLeft(); 

            initialRender.current = false;
        }
    }, []);

    const images = {
        LOGIN : require("src/assets/backgrounds/login.png"),
        HOME  : require("src/assets/backgrounds/home.png"),
        REST  : require("src/assets/backgrounds/rest.png"),
    };

    return (
        <View style={styles.flex}>
            <ImageBackground source={(images[rest?.bg])} resizeMode="contain" resizeMethod="auto" imageStyle={styles.imageStyle} style={styles.flex} >
                <View style={styles.dummy}></View>
                {title ? <Label style={styles.title} text={title} /> : null}
                {children}
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    flex : {
        flex : 1,
    },
    dummy : {
        height : 60
    },
    imageStyle : {
        opacity : 0.75,
        marginTop : 60,
        bottom : !isPhone ? 0 : - Dimensions.get("window").height/2,
    },
    title : {
        fontSize : 20,
        fontWeight : "bold",
        alignSelf : "center",
    },
});

export default memo(PageWithBg);