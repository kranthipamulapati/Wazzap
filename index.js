/**
 * @format
 */

import React from "react";
import {AppRegistry} from "react-native";

import App from "./App";
import {name as appName} from "./app.json";

import {theme} from "./src/themes/default";
import {Provider as ThemeProvider} from "react-native-paper";

import {UserProvider} from "./src/context/userContext";

export const Main = () => {

    return (
        <ThemeProvider theme={theme}>
            <UserProvider>

                <App />
                
            </UserProvider>
        </ThemeProvider>
    );
};

AppRegistry.registerComponent(appName, () => Main);
