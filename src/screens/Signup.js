/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import React, {useState} from "react";
import {View, StyleSheet, ImageBackground} from "react-native";

import auth from "@react-native-firebase/auth";

import Text from "../components/basic/Text";
import Input from "../components/basic/Input";
import Button from "../components/basic/Button";

import Page from "../components/page/Page";

import {theme, Toast, isPhone} from "../global/utils";

const Signup = ({navigation}) => {

    const [user, setUser] = useState({
        Email : "",
        choosePassword  : "",
        confirmPassword : ""
    });

    const signUp = () => {
        if(checkForm()) {

            auth().createUserWithEmailAndPassword(user.Email, user.choosePassword).then((userCredentials) => {
            
                Toast("Sign up success");
                navigation.navigate("Signin");
    
            }).catch(error => {
                Toast(error.message);
            });

        }
    }

    const checkForm = () => {

        if(user.Email === "" || user.choosePassword === "" || user.confirmPassword === "") {
            Toast("Email or password can not be empty");
            return false;
        }

        if(user.choosePassword !== user.confirmPassword) {
            Toast("Passwords do not match");
            return false;
        } 

        return true;
    };

    return (
        <Page style={styles.page}>
            <Text style={styles.title} value={"Welcome to Wazzap"}/>

            <ImageBackground source={require("../assets/welcome-img.png")} resizeMode="contain" style={styles.image}></ImageBackground>

            <View style={styles.signupWrapper}>
                <Input label={"Email"} value={user.Email} onChange={(text) => setUser({...user, ["Email"] : text})} />
                <Input label={"Choose Password"}  value={user.choosePassword}  onChange={(text) => setUser({...user, ["choosePassword"] : text})}  secureTextEntry={true} />
                <Input label={"Confirm Password"} value={user.confirmPassword} onChange={(text) => setUser({...user, ["confirmPassword"] : text})} secureTextEntry={true} />

                <Button text={"Sign Up"} onPress={signUp} />
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
    signupWrapper : {
        flex : 2,
        justifyContent: "center"
    },
    page : {
        paddingHorizontal : isPhone ? "10%" : "35%",
    }
});
 
export default Signup;