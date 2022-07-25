/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import React, {useState} from "react";
import {View, Pressable, StyleSheet, ImageBackground} from "react-native";

import Page from "../components/basic/Page";
import Text from "../components/basic/Text";
import Input from "../components/basic/Input";
import Button from "../components/basic/Button";

import {theme} from "../utils/themes";

import {welcomeImage} from "../utils/assets";
import {Toast, isPhone} from "../utils/utils";
import {Auth, Firestore} from "../utils/firebase";

const Signup = ({navigation}) => {

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const signUp = () => {
        
        if(Email === "" || Name === "" || Password === "") {
            Toast("Please enter all the details.");
            return false;
        }

        Auth.createUserWithEmailAndPassword(Email, Password).then(async (userCredentials) => {

            await Firestore.collection("users").doc(userCredentials.user.uid).set({
                userId : userCredentials.user.uid,
                displayName : Name,
                photoURL : ""
            });

            Toast("Sign up success");

        }).catch(error => {
            Toast(error.message);
        });        
    }

    return (
        <Page style={styles.page}>
            <Text style={styles.title} value={"Welcome to Wazzap"}/>

            <ImageBackground source={welcomeImage} resizeMode="contain" style={styles.image}></ImageBackground>

            <View style={styles.signupWrapper}>
                <Input label={"Name"}     value={Name}     onChange={setName}  />
                <Input label={"Email"}    value={Email}    onChange={setEmail} />
                <Input label={"Password"} value={Password} onChange={setPassword} secureTextEntry={true} />

                <Button text={"Sign Up"} onPress={signUp} />

                <Pressable onPress={() => navigation.navigate("Signin")}>
                    <Text style={styles.text} value={"Have an account? Sign in!"} />
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
        flex : 1.5,
    },
    text : {
        color: "blue",
        textAlign: "center"
    },
    signupWrapper : {
        flex : 2,
        justifyContent: "center"
    },
    page : {
        paddingHorizontal : isPhone ? "10%" : "35%",
    }
});
 
export default Signup;