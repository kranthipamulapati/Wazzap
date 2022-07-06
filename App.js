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

import {ContextProvider} from "./src/global/context";

const App = () => {
    const Stack = createNativeStackNavigator();

    let screenOptions = {
        headerShown : false
    };

    return (
        <RootSiblingParent>
            <ContextProvider>

                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Splash" screenOptions={screenOptions}>
                        
                        <Stack.Screen name="Splash" component={Splash} />
                        <Stack.Screen name="Signin" component={Signin} />
                        <Stack.Screen name="Signup" component={Signup} />
                        <Stack.Screen name="Home"   component={Home}   />

                    </Stack.Navigator>
                </NavigationContainer>

            </ContextProvider>
        </RootSiblingParent>
    );
};

export default App;