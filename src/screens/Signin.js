/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import React, {useState} from "react";
import {View, Pressable, StyleSheet, ImageBackground} from "react-native";

import Page from "../components/page/Page";
import Text from "../components/basic/Text";
import Input from "../components/basic/Input";
import Button from "../components/basic/Button";

import {theme} from "../themes/default";

import {Auth} from "../utils/firebase";
import {Toast, isPhone} from "../utils/utils";

const Signin = ({navigation}) => {

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const signIn = () => {
        if(Email.length === 0 || Password.length === 0) return false;

        Auth.signInWithEmailAndPassword(Email, Password).then((userCredentials) => {
            Toast("Sign in success.");
        }).catch(error => {
            Toast(error.message);
        });
    }

    return (
        <Page style={styles.page}>
            <Text style={styles.title} value={"Welcome to Wazzap"}/>

            <ImageBackground source={require("../assets/welcome-img.png")} resizeMode="contain" style={styles.image}></ImageBackground>

            <View style={styles.signinWrapper}>
                <Input style={styles.input} label={"Email"}    value={Email}    onChange={setEmail} />
                <Input style={styles.input} label={"Password"} value={Password} onChange={setPassword} secureTextEntry={true} />
            
                <Button text={"Sign In"} onPress={signIn} />

                <Pressable onPress={() => navigation.navigate("Signup")}>
                    <Text style={styles.text} value={"Don't have an account? Sign Up!"} />
                </Pressable>
            </View>

        </Page>
    );
};

const styles = StyleSheet.create({
    title : {
        flex : 1,
        fontSize: 30,
        alignSelf: "center",
        color: theme.colors.primary,
        textAlignVertical: "center"
    },
    image : {
        flex: 1.5,
    },
    signinWrapper : {
        flex : 2,
        justifyContent: "center"
    },
    page : {
        paddingHorizontal : isPhone ? "10%" : "35%",
    },
    text : {
        color: "blue",
        textAlign: "center"
    }
});

export default Signin;