/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import * as React from "react";
import {StyleSheet} from "react-native";

import {Card} from "react-native-paper";

const Container = ({style = {}, children, ...rest}) => {

    return (
        <Card style={{...style, ...styles.container}}>
            {children}
        </Card>
    );
};

const styles = StyleSheet.create({
    container : {
    }
});

export default Container;