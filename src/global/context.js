import {createContext} from "react";

import auth from "@react-native-firebase/auth";

import {showToast} from "../global/utils";

const AuthContext = createContext({
    user : {
        Email : "",
        Password : ""
    },
    login : async (email, password) => {
        try {
            await auth.signInWithEmailAndPassword(email, password);
        } catch(e) {
            showToast.show(JSON.stringify(e));
        }
    },
    logout : async () => {
        try {
            await auth().signOut();
        } catch(e) {
            showToast.show(JSON.stringify(e));
        }
    },
    register : async (email, password) => {
        try {
            await auth.createUserWithEmailAndPassword(email, password);
        } catch(e) {
            showToast.show(JSON.stringify(e));
        }
    },
});

export {AuthContext};