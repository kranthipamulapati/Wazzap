/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import React, {useEffect, useContext} from "react";
import {StyleSheet} from "react-native";

import auth from "@react-native-firebase/auth";

import Page from "../components/page/Page";

import Image from "../components/basic/Image";

import {initialState, GlobalContext} from "../global/context";

const Splash = ({navigation}) => {
    const {user, setUser} = useContext(GlobalContext);

    useEffect(() => {
        auth().onAuthStateChanged((User) => {
            
            if(User) {
                setUser({...user, ["Info"] : User});
                navigation.navigate("Home");
            } else {
                setUser(initialState);
                navigation.navigate("Signin");
            } 
            
        });
    }, []);

    return (
        <Page style={styles.center}>
            <Image source={require("../assets/welcome-img.png")} />
        </Page>
    );
};

const styles = StyleSheet.create({
    center : {
        alignItems : "center",
        justifyContent : "center"
    }
});
 
export default Splash;