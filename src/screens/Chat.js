/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import React, {useContext} from "react";
import {ImageBackground, StyleSheet} from "react-native";

import useChat from "../hooks/useChat";

import Page from "../components/basic/Page";

import {UserContext} from "../context/userContext";

import {chatBgImage} from "../utils/assets";

const Chat = ({route}) => {

    const contact = route.params.contact;
    const {authInfo} = useContext(UserContext);
    
    const [chat, setChat] = useChat(authInfo.uid, contact.docId);

    return (
        <Page>
            <ImageBackground source={chatBgImage} style={{flex:1}}>

            </ImageBackground>
        </Page>
    );
};

const styles = StyleSheet.create({
});

export default Chat;