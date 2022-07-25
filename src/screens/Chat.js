/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import React, {useContext, useCallback} from "react";
import {Pressable, StyleSheet, ImageBackground} from "react-native";

import {GiftedChat} from "react-native-gifted-chat";
import Icon from "react-native-vector-icons/FontAwesome5";

import useChat from "../hooks/useChat";

import Page from "../components/basic/Page";

import {UserContext} from "../context/userContext";

import {theme} from "../utils/themes";
import {chatBgImage} from "../utils/assets";
import {Toast, takePicture} from "../utils/utils";
import {Storage, Firestore, arrayUnion, uploadImage} from "../utils/firebase";

const Chat = ({route}) => {

    const {contact} = route.params;
    const {userInfo} = useContext(UserContext);

    const [chat, setChat] = useChat(userInfo, contact);
    
    const onSend = useCallback(async (messages) => {
        
        let message = messages[0];
        message.createdAt = new Date().getTime();

        try {
            await Firestore.collection("chats").doc(chat.docId).update({
                lastMessage : message.text,
                messages : arrayUnion(message),
            });

            setChat({
                ...chat,
                messages : [...chat.messages, message],
                lastMessage: message.text
            });
        } catch(err) {
            Toast(err.message);
        }

    }, [chat]);

    async function pickImage() {
        let result = await takePicture();
        
        if(result.error) {
            Toast(result.errorMessage);
        } else {
            
            let task = await uploadImage(result.uri, "images/chatimages");
            if(task.state === "success") {

                Storage.ref(task.fileName).getDownloadURL().then((url) => {

                    onSend([{
                        _id : new Date().getTime(),
                        text : "",
                        image : url,
                        user : {
                            _id : userInfo.docId
                        }
                    }]);
                    
                }).catch((e) => {
                    Toast(e.message);
                });                    

            } else {
                Toast("Picture upload failed.");
            } 
        }
    }

    return (
        <Page>
            <ImageBackground source={chatBgImage} style={{flex : 1}}>

                <Icon name="camera" size={30} style={styles.cameraIcon} onPress={pickImage} />

                <GiftedChat onSend={onSend} renderAvatar={null} messages={chat.messages} user={{_id : userInfo.docId}} renderSend={(props) => {

                    const {text, messageIdGenerator, user, onSend} = props;
                    return (
                        <Pressable style={styles.send} onPress={() => onSend({
                            text : text.trim(),
                            user,
                            _id : messageIdGenerator()
                        })}>
                            <Icon name="paper-plane" size={20} color={"white"} />
                        </Pressable>
                    )
                }} />

            </ImageBackground>
        </Page>
    );
};

const styles = StyleSheet.create({
    send : {
        width : 32,
        height : 32,
        borderRadius : 32,
        backgroundColor : theme.colors.primary,
        alignItems : "center",
        justifyContent : "center",
        marginRight : 2.5,
        marginBottom : 5
    },
    cameraIcon : {
        position : "absolute",
        bottom : 5,
        right : 45,
        zIndex : 1
    }
});

export default Chat;