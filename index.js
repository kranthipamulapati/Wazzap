/**
 * @format
 */

import React from "react";
import {AppRegistry} from "react-native";

import App from "./App";
import {name as appName} from "./app.json";

import {theme} from "./src/utils/themes";
import {Provider as ThemeProvider} from "react-native-paper";

import {UserProvider} from "./src/context/userContext";
import {ContactProvider} from "./src/context/contactContext";

export const Main = () => {

    return (
        <ThemeProvider theme={theme}>
            
            <UserProvider>
                <ContactProvider>

                    <App />

                </ContactProvider>
            </UserProvider>
            
        </ThemeProvider>
    );
};

AppRegistry.registerComponent(appName, () => Main);
