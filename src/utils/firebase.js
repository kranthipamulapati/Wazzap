import auth from "@react-native-firebase/auth";
import storage from "@react-native-firebase/storage";
import firestore from "@react-native-firebase/firestore";

//import {doc, query, where, addDoc, setDoc, getDocs, collection, arrayUnion, arrayRemove, getFirestore} from "firebase/firestore";
//import {getAuth, signOut, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";

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

export async function updateProfile(userId, data) {
    let users = Firestore.collection("users"); 

    
};