import auth from "@react-native-firebase/auth";
import storage from "@react-native-firebase/storage";
import firestore from "@react-native-firebase/firestore";

import {Toast} from "./utils";

export const Auth = auth();
export const Storage = storage();
export const Firestore = firestore();

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

export async function getUserByUserId(userId) {
    let user = null;
    
    let results = await Firestore.collection("users").where("userId", "==", userId).get();
    results.forEach((User) => {
        user = {
            ...User.data(),
            docId : User.id
        } 
    });
    
    return user;
};