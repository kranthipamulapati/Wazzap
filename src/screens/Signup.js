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

import {Auth} from "../utils/firebase";
import {Toast, theme, isPhone} from "../utils/utils";

const Signup = ({navigation}) => {

    const [user, setUser] = useState({
        Email : "",
        Name  : "",
        Password : ""
    });

    const signUp = () => {
        if(checkForm()) {

            Auth.createUserWithEmailAndPassword(user.Email, user.Password).then((User) => {

                User.updateProfile({
                    displayName : user.Name
                });
            
                Toast("Sign up success");
                navigation.navigate("Signin");
    
            }).catch(error => {
                Toast(error.message);
            });

        }
    }

    const checkForm = () => {

        if(user.Email === "" || user.Name === "" || user.Password === "") {
            Toast("Please enter all the details.");
            return false;
        }

        return true;
    };

    return (
        <Page style={styles.page}>
            <Text style={styles.title} value={"Welcome to Wazzap"}/>

            <ImageBackground source={require("../assets/welcome-img.png")} resizeMode="contain" style={styles.image}></ImageBackground>

            <View style={styles.signupWrapper}>
                <Input label={"Email"}    value={user.Email}    onChange={(text) => setUser({...user, ["Email"]    : text})} />
                <Input label={"Name"}     value={user.Name}     onChange={(text) => setUser({...user, ["Name"]     : text})} />
                <Input label={"Password"} value={user.Password} onChange={(text) => setUser({...user, ["Password"] : text})} secureTextEntry={true} />

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