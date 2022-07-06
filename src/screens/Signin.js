/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import React, {useContext} from "react";
import {Pressable, StyleSheet} from "react-native";

import auth from "@react-native-firebase/auth";

import Text from "../components/basic/Text";
import Input from "../components/basic/Input";
import Button from "../components/basic/Button";

import Page from "../components/page/Page";
import Header from "../components/page/Header";
import Container from "../components/page/Container";

import {Toast, isPhone} from "../global/utils";
import {GlobalContext} from "../global/context";

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
        <Page>
            <Header></Header>

            <Container style={styles.signinContainer}>
                
                <Input label={"Email"}    value={user.Email}    onChange={(text) => setUser({...user, ["Email"]    : text})} />
                <Input label={"Password"} value={user.Password} onChange={(text) => setUser({...user, ["Password"] : text})} secureTextEntry={true} />
            
                <Button text={"Signin"}   onPress={signIn} />

                <Pressable onPress={() => navigation.navigate("Signup")}>
                    <Text style={styles.text} value={"Do not have an account? Sign up"} />
                </Pressable>

            </Container>
        </Page>
    );
};

const styles = StyleSheet.create({
    text : {
        color: "blue"
    },
    signinContainer : {
        marginLeft : isPhone ? "0%" : "35%", 
        marginRight : isPhone ? "0%" : "35%"
    }
});

export default Signin;