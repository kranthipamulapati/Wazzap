import {Dimensions} from "react-native";

import {DefaultTheme} from "react-native-paper";
import {isTablet} from "react-native-device-info";

import {default as toast} from "react-native-root-toast";

export const isPhone = !isTablet();
export const {width, height} = Dimensions.get("window");

export const Toast = (message) => {
    toast.show(message, {
        duration    : toast.durations.SHORT,
        position    : toast.positions.BOTTOM,
        shadow      : true,
        animation   : true,
        hideOnPress : true,
        delay       : 0,
    });
};

export const theme = {
    ...DefaultTheme,
    colors : {
        ...DefaultTheme.colors,

        primary: "#25d366", // teal green
        secondary: "#075e54", // teal green dark

        white: "#ffffff", // white
        error : "#f13a59", // red
    }
};