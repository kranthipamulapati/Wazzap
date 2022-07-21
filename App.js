/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import React, {useContext} from "react";

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {RootSiblingParent} from "react-native-root-siblings";

import Home from "./src/screens/Home";
import Chat from "./src/screens/Chat";
import Splash from "./src/screens/Splash";
import Signin from "./src/screens/Signin";
import Signup from "./src/screens/Signup";
import Contacts from "./src/screens/Contacts";

import {theme} from "./src/themes/default";

import {UserContext} from "./src/context/userContext";

const App = () => {
    
    const {authInfo, userInfo} = useContext(UserContext);
    const Stack = createNativeStackNavigator();

    const screenOptions = {
        headerShown : true,
        headerStyle : {
            backgroundColor : theme.colors.primary,
        },
        headerTintColor : theme.colors.white,
    };

    function returnScreens() {

        if(authInfo === null) {
            return <>
                <Stack.Screen name="Signin" component={Signin} options={{headerShown : false}} />
                <Stack.Screen name="Signup" component={Signup} options={{headerShown : false}} />
            </>  
        } else if(authInfo === false || [null, false].includes(userInfo)) {
            return <Stack.Screen name="Splash" component={Splash} options={{headerShown : false}} />
        }
        
        return <>
            <Stack.Screen name="Home"     component={Home}     options={{title : "Wazzap", headerBackVisible : false}} />
            <Stack.Screen name="Chat"     component={Chat}     options={{title : "Select Contact", headerBackVisible : false}} />
            <Stack.Screen name="Contacts" component={Contacts} options={{title : "Select Contact", headerBackVisible : false}} />
        </> 
    }

    return (
        <RootSiblingParent>
            <NavigationContainer>
                
                <Stack.Navigator screenOptions={screenOptions}>

                    {returnScreens()}
                    
                </Stack.Navigator>
            
            </NavigationContainer>
        </RootSiblingParent>
    );
};

export default App;