import {Dimensions} from "react-native";

import {isTablet} from "react-native-device-info";

import {default as toast} from "react-native-root-toast";

import {request} from "react-native-permissions";

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

export const getPermission = async (permission) => {

    try {

        let result = await request(permission);
        if(result === "granted") return true;
        else return false;

    } catch(e) {

        Toast(e.message);
        return false;

    }
    
}