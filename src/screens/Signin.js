/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import React, {useContext} from "react";
import {View, Pressable, StyleSheet, ImageBackground} from "react-native";

import auth from "@react-native-firebase/auth";

import Text from "../components/basic/Text";
import Input from "../components/basic/Input";
import Button from "../components/basic/Button";

import Page from "../components/page/Page";

import {GlobalContext} from "../global/context";
import {theme, Toast, isPhone} from "../global/utils";

const Signin = ({navigation}) => {
    const {user, setUser} = useContext(GlobalContext);

    const signIn = () => {
        auth().signInWithEmailAndPassword(user.Email, user.Password).then((userCredentials) => {
            
            setUser({...user, ["Info"] : userCredentials});
            navigation.navigate("Home");

        }).catch(error => {
            Toast(error.message);
        });
    }

    return (
        <Page style={styles.page}>
            <Text style={styles.title} value={"Welcome to Wazzap"}/>

            <ImageBackground source={require("../assets/welcome-img.png")} resizeMode="contain" style={styles.image}></ImageBackground>

            <View style={styles.signinWrapper}>
                <Input style={styles.input} label={"Email"}    value={user.Email}    onChange={(text) => setUser({...user, ["Email"]    : text})} />
                <Input style={styles.input} label={"Password"} value={user.Password} onChange={(text) => setUser({...user, ["Password"] : text})} secureTextEntry={true} />
            
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