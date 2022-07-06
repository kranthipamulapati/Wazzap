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

const palette = {
    red           : "#f13a59",
    white         : "#ffffff",
    tealGreen     : "#25d366",
    tealGreenDark : "#075e54",
};

const theme = {
    ...DefaultTheme,
    colors : {
        ...DefaultTheme.colors,

        primary: palette.tealGreen,
        secondary: palette.tealGreenDark,

        white: palette.white,
        error : palette.red,
    },
}

export {theme, width, height, isPhone, Toast};