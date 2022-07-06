import {Dimensions} from "react-native";
const {width, height} = Dimensions.get("window");

import {isTablet} from "react-native-device-info";
const isPhone = !isTablet();

import {default as toast} from "react-native-root-toast";
const Toast = (message) => {
    toast.show(message, {
        duration    : toast.durations.SHORT,
        position    : toast.positions.BOTTOM,
        shadow      : true,
        animation   : true,
        hideOnPress : true,
        delay       : 0,
    });
};

import {DefaultTheme} from "react-native-paper";
const theme = {
    ...DefaultTheme,
    colors : {
        ...DefaultTheme.colors,
        primary : "#65b42e",
        secondary : "#414757",
        error : "#f13a59",
    },
}

export {theme, width, height, isPhone, Toast};