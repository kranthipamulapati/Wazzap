/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import React from "react";

import Icon from "react-native-vector-icons/FontAwesome";

import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

import Chats from "./Chats";
import Profile from "./Profile";
import { theme } from "../utils/themes";

const Home = ({navigation}) => {

    const Tab = createMaterialTopTabNavigator();
    
    return (
        <Tab.Navigator screenOptions={({ route }) => {
            return {tabBarLabel: () => {
                let iconName;
  
                if (route.name === "Chats") {
                    iconName = "wechat";
                } else if (route.name === "Profile") {
                    iconName = "camera";
                }
  
                return <Icon name={iconName} size={16} color={theme.colors.primary} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          }}}
        >
            <Tab.Screen name="Chats" component={Chats} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

export default Home;