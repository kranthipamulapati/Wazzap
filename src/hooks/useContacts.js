import {useState, useEffect} from "react";

import {getPermission} from "../utils/utils";

import {PERMISSIONS} from "react-native-permissions";

import {default as DeviceContacts} from "react-native-contacts";

export default function useContacts() {
    const [contacts, setContacts] = useState([]);
    
    useEffect(() => {
        
        async function getContacts() {
            
            try {

                let deviceContacts = await DeviceContacts.getAll();
                if(deviceContacts.length > 0) setContacts(deviceContacts);
                
            } catch(e) {
                Toast(e.message);
            }
            
        }

        let result = getPermission(PERMISSIONS.ANDROID.READ_CONTACTS);
        if(result) getContacts();

    }, []);

    return contacts;
}