/**
 * Wazzap React Native App
 * kranthipamulapati.com
 */

import React, {useState} from "react";
import {StyleSheet, KeyboardAvoidingView} from "react-native";

import {Dialog, Portal} from "react-native-paper";

import Input from "../basic/Input";
import Button from "../basic/Button";

import {isPhone} from "../../utils/utils";

const DisplayName = ({text, hideDisplayNameModal}) => {

    const [displayName, setDisplayName] = useState(text);
    
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <Portal>
            
                <Dialog visible={true} dismissable={false} style={styles.dialog}>

                    <Dialog.Content>
                        <Input label="Display Name" value={displayName} maxLength={50} onChange={text => setDisplayName(text)} />
                    </Dialog.Content>

                    <Dialog.Actions>
                        <Button text="Cancel" style={styles.btn} showText={true} onPress={() => hideDisplayNameModal(false, displayName)} />
                        <Button text="Ok"     style={styles.btn} showText={true} onPress={() => hideDisplayNameModal(true, displayName)} />
                    </Dialog.Actions>
                    
                </Dialog>

            </Portal>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    dialog : {
        alignSelf : "center",
        width : isPhone ? "80%" : "40%",
    },
    btn : {
        marginHorizontal: "2%",
        paddingHorizontal: "2%"
    }
});

export default DisplayName;