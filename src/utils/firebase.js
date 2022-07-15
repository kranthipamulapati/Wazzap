import auth from "@react-native-firebase/auth";
import storage from "@react-native-firebase/storage";

import {Toast} from "./utils";

export const Auth = auth();
export const Storage = storage();

export async function uploadImage(uri, path) {
    
    const fileName = `${path}/${new Date().getTime()}.jpeg`;
    const imageRef = Storage.ref(fileName);

    try {
        let task = await imageRef.putFile(uri);
        return {...task, fileName};
    } catch (e) {
        Toast(e.message);
        return {state : "failed", fileName};
    }
};