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

const theme = {
    colors : {
        primary : "violet"
    }
}

export {theme, width, height, isPhone, Toast};