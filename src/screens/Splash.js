/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import React, {useEffect, useContext} from "react";
import {StyleSheet} from "react-native";

import Page from "../components/page/Page";
import Header from "../components/page/Header";

import Title from "../components/basic/Title";

import {AuthContext} from "../global/context";

const Splash = ({navigation}) => {

    const value = useContext(AuthContext);

    useEffect(function() {

        navigation.navigate("Login");
        
    }, []);

    return (
        <Page style={styles.center}>
            <Header></Header>
            <Title text={"Wazzap"} />
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