import {Dimensions} from "react-native";

import {isTablet} from "react-native-device-info";

import {default as toast} from "react-native-root-toast";

import {request} from "react-native-permissions";

import {launchCamera} from "react-native-image-picker";

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
    
};

export const takePicture = async () => {

    let obj = {
        uri : "",
        error : true,
        errorMessage : ""
    };

    let options = {
        includeBase64 : false,
        saveToPhotos  : false,
        mediaType     : "photo",
        quality       : 1
    };

    try {
        const response = await launchCamera(options);

        if(response.didCancel) {
            obj.errorMessage = "Cancelled by user.";
        } else if(response.errorCode) {
            obj.errorMessage = response.errorMessage;
        } else {
            obj.error = false;
            obj.uri = response.assets[0].uri;
        }

        return obj;
    } catch (err) {
        obj.errorMessage = err.message;
        return obj;
    }
    
};