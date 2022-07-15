/**
 * @format
 */

import React from "react";
import {AppRegistry} from "react-native";

import {Provider as PaperProvider} from "react-native-paper";

import App from "./App";
import {name as appName} from "./app.json";

import {theme} from "./src/utils/utils";
import {UserProvider} from "./src/context/userContext";

export const Main = () => {

    return (
        <PaperProvider theme={theme}>
            <UserProvider>

                <App />
                
            </UserProvider>
        </PaperProvider>
    );
};

AppRegistry.registerComponent(appName, () => Main);
