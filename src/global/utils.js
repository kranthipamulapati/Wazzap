import {Dimensions} from "react-native";

import Toast from "react-native-root-toast";
import {isTablet} from "react-native-device-info";

const isPhone = !isTablet();
const {width, height} = Dimensions.get("window");

const showToast = (message) => {
    Toast.show(message, {
        duration    : Toast.durations.SHORT,
        position    : Toast.positions.BOTTOM,
        shadow      : true,
        animation   : true,
        hideOnPress : true,
        delay       : 0,
    });
};  

export {width, height, isPhone, showToast};