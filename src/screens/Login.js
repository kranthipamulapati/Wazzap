/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import React, {useContext} from "react";
import {StyleSheet} from "react-native";

import auth from "@react-native-firebase/auth";

import Input from "../components/basic/Input";
import Button from "../components/basic/Button";

import Page from "../components/page/Page";
import Header from "../components/page/Header";
import Container from "../components/page/Container";

import {Toast, isPhone} from "../global/utils";
import {GlobalContext} from "../global/context";

const Login = ({navigation}) => {
    const {user, setUser} = useContext(GlobalContext);

    const signIn = () => {
        auth().signInWithEmailAndPassword(user.Email, user.Password).then((userCredentials) => {
            
            setUser({...user, ["Info"] : userCredentials});
            navigation.navigate("Home");

        }).catch(error => {
            Toast(error.message);
        });
    }

    const signUp = () => {
        auth().createUserWithEmailAndPassword(user.Email, user.Password).then((userCredentials) => {
            
            Toast("Sign up success");
            setUser({...user, ["Info"] : userCredentials});
            navigation.navigate("Home");

        }).catch(error => {
            Toast(error.message);
        });
    }

    return (
        <Page>
            <Header></Header>

            <Container style={styles.loginContainer}>
                
                <Input label={"Email"}    value={user.Email}    onChange={(text) => setUser({...user, ["Email"]    : text})} />
                <Input label={"Password"} value={user.Password} onChange={(text) => setUser({...user, ["Password"] : text})} secureTextEntry={true} />
            
                <Button text={"Login"}    onPress={signIn} />
                <Button text={"Register"} onPress={signUp} />

            </Container>
        </Page>
    );
};

const styles = StyleSheet.create({
    loginContainer : {
        marginLeft : isPhone ? "0%" : "35%", 
        marginRight : isPhone ? "0%" : "35%"
    }
});

export default Login;