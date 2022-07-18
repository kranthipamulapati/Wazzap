/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import React from "react";

import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

import Chats from "./Chats";
import Profile from "./Profile";

const Home = ({navigation}) => {

    const Tab = createMaterialTopTabNavigator();
    
    return (
        <Tab.Navigator>
            <Tab.Screen name="Chats" component={Chats} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

export default Home;