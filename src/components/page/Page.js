/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import React from "react";
import {StyleSheet, SafeAreaView} from "react-native";
 
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
        backgroundColor: "#fff"
    }
});
 
export default Page;