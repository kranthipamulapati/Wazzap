import {useState, useEffect} from "react";

import {PERMISSIONS} from "react-native-permissions";
import {default as DeviceContacts} from "react-native-contacts";

import {Firestore} from "../utils/firebase";
import {Toast, getPermission} from "../utils/utils";

export default function useContacts() {
    const [contacts, setContacts] = useState([]);
    
    useEffect(() => {
        async function getContacts() {
            
            try {

                let wazzapContacts = [], 
                    deviceContacts = await DeviceContacts.getAll();

                let emails = deviceContacts
                    .filter((deviceContact) => deviceContact.emailAddresses.length > 0)
                    .map(emailContact => emailContact.emailAddresses[0].email);
            
                let results = await Firestore.collection("users").where("emailAddress", "in", emails).get();

                results.forEach(result => wazzapContacts.push({
                    ...result.data(),
                    docId : result.id
                }));

                setContacts(wazzapContacts);
                
            } catch(e) {
                Toast(e.message);
            }
            
        }

        let granted = getPermission(PERMISSIONS.ANDROID.READ_CONTACTS);
        if(granted) getContacts();

    }, []);

    return contacts;
}