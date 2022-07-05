/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import React, {useContext} from "react";

import auth from "@react-native-firebase/auth";

import Page from "../components/page/Page";
import Header from "../components/page/Header";

import Title from "../components/basic/Title";
import Button from "../components/basic/Button";

import {Toast} from "../global/utils";
import {initialState, GlobalContext} from "../global/context";

const Home = ({navigation}) => {
    const {user, setUser} = useContext(GlobalContext);

    const Logout = () => {
        auth().signOut().then(() => {

            setUser(initialState);
            Toast("Logout successful");
            navigation.navigate("Login");
            
        });
    }

    return (
        <Page>
            <Header>
                <Button text={"Logout"} onPress={Logout} />
            </Header>

            <Title>Home</Title>
        </Page>
    );
};

export default Home;