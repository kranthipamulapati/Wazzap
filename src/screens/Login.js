/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import React, {useState, useEffect} from "react";
import {StyleSheet} from "react-native";

import auth from "@react-native-firebase/auth";

import {isPhone, showToast} from "../global/utils";

import Input from "../components/basic/Input";
import Button from "../components/basic/Button";

import Page from "../components/page/Page";
import Header from "../components/page/Header";
import Footer from "../components/page/Footer";
import Container from "../components/page/Container";

const Login = ({navigation}) => {

    const [user, setUser] = useState({
        Email    : "",
        Password : "",
    });

    const signIn = () => {

        auth().signInWithEmailAndPassword(user.Email, user.Password)
        .then((userCredentials) => {

            navigation.navigate("Home");

        })
        .catch(error => {

            showToast(error.message);

        });
    }

    const signUp = () => {
        
        auth().createUserWithEmailAndPassword(user.Email, user.Password)
        .then((userCredentials) => {

            showToast("Sign up success");
            navigation.navigate("Home");

        })
        .catch(error => {

            showToast(error.message);

        });
    }

    useEffect(() => {
        auth().onAuthStateChanged((User) => {
            if(User) navigation.navigate("Home");
        });
    }, []);

    return (
        <Page>
            <Header></Header>

                <Container style={styles.loginContainer}>
                    
                    <Input label={"Email"}    value={user.Email}    onChangeText={(text) => setUser({...user, ["Email"]    : text})} />
                    <Input label={"Password"} value={user.Password} onChangeText={(text) => setUser({...user, ["Password"] : text})} secureTextEntry={true} />
                
                    <Button text={"Login"}    onPress={signIn} />
                    <Button text={"Register"} onPress={signUp} />

                </Container>
            
            <Footer></Footer>
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