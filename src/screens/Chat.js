/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import React, {useState, useEffect, useContext, useCallback} from "react";
import {StyleSheet, ImageBackground} from "react-native";

import {GiftedChat} from "react-native-gifted-chat";

import useChat from "../hooks/useChat";

import Page from "../components/basic/Page";

import {UserContext} from "../context/userContext";

import {userIcon} from "../utils/assets";
import {chatBgImage} from "../utils/assets";

const Chat = ({route}) => {

    const {contact} = route.params;
    
    const {authInfo} = useContext(UserContext);

    const [messages, setMessages] = useState([]);

    const [chat, setChat] = useChat(authInfo.uid, contact.docId);

    useEffect(() => {

		setMessages(chat.messages.map((message) => {
			return {
				_id       : message._id,
            	text      : message.text,
            	createdAt : message.createdAt,
            	user : {
              		_id    : message.userId,
              		avatar : userIcon,
            	}
			}
		}));

    }, [chat]);

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, []);

    return (
        <Page>
            <ImageBackground source={chatBgImage} style={{flex : 1}}>
                <GiftedChat messages={messages} onSend={messages => onSend(messages)} user={{_id: 1, }} />
            </ImageBackground>
        </Page>
    );
};

const styles = StyleSheet.create({
});

export default Chat;