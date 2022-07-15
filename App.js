/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import React from "react";

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {RootSiblingParent} from "react-native-root-siblings";

import Home from "./src/screens/Home";
import Signin from "./src/screens/Signin";
import Signup from "./src/screens/Signup";
import Splash from "./src/screens/Splash";
import Profile from "./src/screens/Profile";

import {theme} from "./src/utils/utils";

const App = () => {
    const Stack = createNativeStackNavigator();

    let screenOptions = {
        headerShown : true,
        headerStyle : {
            backgroundColor : theme.colors.primary,
        },
        headerTintColor : theme.colors.white,
    };

    return (
        <RootSiblingParent>
            
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Splash" screenOptions={screenOptions}>
                    
                    <Stack.Screen name="Splash"  component={Splash}  options={{headerShown : false}} />
                    <Stack.Screen name="Signin"  component={Signin}  options={{headerShown : false}} />
                    <Stack.Screen name="Signup"  component={Signup}  options={{headerShown : false}} />
                    <Stack.Screen name="Home"    component={Home}    options={{title : "Wazzap", headerBackVisible : false}} />
                    <Stack.Screen name="Profile" component={Profile} options={{title : "Profile"}}   />

                </Stack.Navigator>
            </NavigationContainer>
            
        </RootSiblingParent>
    );
};

export default App;