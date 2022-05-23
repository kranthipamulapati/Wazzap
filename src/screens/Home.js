/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import React from "react";

import Page from "../components/page/Page";
import Header from "../components/page/Header";
import Footer from "../components/page/Footer";

import Title from "../components/basic/Title";
import Button from "../components/basic/Button";

const Home = ({navigation}) => {

    const Logout = () => {

    }

    return (
        <Page>
            <Header>
                <Button text={"Logout"} onPress={Logout} />
            </Header>

            <Title>Home</Title>

            <Footer></Footer>
        </Page>
    );
};

export default Home;