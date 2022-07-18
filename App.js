/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import React, {useContext} from "react";

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {RootSiblingParent} from "react-native-root-siblings";

import Home from "./src/screens/Home";
import Signin from "./src/screens/Signin";
import Signup from "./src/screens/Signup";
import Profile from "./src/screens/Profile";

import {theme} from "./src/themes/default";

import {UserContext} from "./src/context/userContext";

const App = () => {
    
    const {userInfo} = useContext(UserContext);
    const Stack = createNativeStackNavigator();

    const screenOptions = {
        headerShown : true,
        headerStyle : {
            backgroundColor : theme.colors.primary,
        },
        headerTintColor : theme.colors.white,
    };

    return (
        <RootSiblingParent>
            <NavigationContainer>
                
                <Stack.Navigator initialRouteName={userInfo ? "Signin" : "Profile"} screenOptions={screenOptions}>
                    
                    {userInfo === null ? <>
                        <Stack.Screen name="Signin" component={Signin} options={{headerShown : false}} />
                        <Stack.Screen name="Signup" component={Signup} options={{headerShown : false}} />
                    </> : <>
                        <Stack.Screen name="Home"    component={Home}    options={{title : "Wazzap", headerBackVisible : false}} />
                        <Stack.Screen name="Profile" component={Profile} options={{title : "Profile"}} />
                    </>}

                </Stack.Navigator>
            
            </NavigationContainer>
        </RootSiblingParent>
    );
};

export default App;