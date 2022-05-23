/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import React, {useState} from "react";

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {RootSiblingParent} from "react-native-root-siblings";

import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Splash from "./src/screens/Splash";

import {AuthContext} from "./src/global/context";

const App = () => {
    const Stack = createNativeStackNavigator();

    let screenOptions = {
        headerShown : false
    };

    const [user, setUser] = useState({
        Email    : "",
        Password : "",
    });

    return (
        <RootSiblingParent>
            <NavigationContainer>

                <AuthContext.Provider value={user}>
                    <Stack.Navigator initialRouteName="Splash" screenOptions={screenOptions}>
                        
                        <Stack.Screen name="Splash" component={Splash} />
                        <Stack.Screen name="Login"  component={Login}  />
                        <Stack.Screen name="Home"   component={Home}   />

                    </Stack.Navigator>
                </AuthContext.Provider>
                
            </NavigationContainer>
        </RootSiblingParent>
    );
};

export default App;