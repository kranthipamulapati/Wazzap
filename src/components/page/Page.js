/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import React from "react";
import {StyleSheet, SafeAreaView} from "react-native";

import {isPhone} from "../../global/utils";
 
const Page = ({style, children}) => {

    return (
        <SafeAreaView style={{...style, ...styles.page}}>
            {children}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    page : {
        flex : 1,
        paddingLeft : isPhone ? "7.5%" : "2.5%",
        paddingRight : isPhone ? "7.5%" : "2.5%",
    }
});
 
export default Page;