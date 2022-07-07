/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import React from "react";

import auth from "@react-native-firebase/auth";

import Page from "../components/page/Page";

import {Toast} from "../global/utils";

const Home = ({navigation}) => {
    const user = auth().currentUser;

    const Logout = () => {
        auth().signOut().then(() => {

            Toast("Logout successful");
            navigation.navigate("Signin");
            
        });
    }

    return (
        <Page>
        </Page>
    );
};

export default Home;