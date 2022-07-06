/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import React, {useState} from "react";
import {StyleSheet} from "react-native";

import auth from "@react-native-firebase/auth";

import Input from "../components/basic/Input";
import Button from "../components/basic/Button";

import Page from "../components/page/Page";
import Header from "../components/page/Header";
import Container from "../components/page/Container";

import {Toast, isPhone} from "../global/utils";

const Signup = ({navigation}) => {

    const signUp = () => {
        if(checkPassword()) {

            auth().createUserWithEmailAndPassword(user.Email, user.choosePassword).then((userCredentials) => {
            
                Toast("Sign up success");
                navigation.navigate("Signin");
    
            }).catch(error => {
                Toast(error.message);
            });

        }
    }

    const [user, setUser] = useState({
        Email : "",
        choosePassword  : "",
        confirmPassword : ""
    });

    const checkPassword = () => {

        if(user.choosePassword !== "") {
            Toast("Please can not be empty");
            return false;
        }

        if(user.choosePassword !== user.confirmPassword) {
            Toast("Passwords do not match");
            return false;
        } 

        return true;
    };

    return (
        <Page>
            <Header></Header>

            <Container style={styles.signupContainer}>
                
                <Input label={"Email"} value={user.Email} onChange={(text) => setUser({...user, ["Email"] : text})} />
                <Input label={"Choose Password"}  value={user.choosePassword}  onChange={(text) => setUser({...user, ["choosePassword"] : text})}  secureTextEntry={true} />
                <Input label={"Confirm Password"} value={user.confirmPassword} onChange={(text) => setUser({...user, ["confirmPassword"] : text})} secureTextEntry={true} />
            
                <Button text={"Sign Up"} onPress={signUp} />

            </Container>
        </Page>
    );
};
 
const styles = StyleSheet.create({
    signupContainer : {
        marginLeft : isPhone ? "0%" : "35%", 
        marginRight : isPhone ? "0%" : "35%"
    }
});
 
export default Signup;