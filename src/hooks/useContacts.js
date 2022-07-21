import {useState, useEffect} from "react";

import {Toast, getPermission} from "../utils/utils";

import {PERMISSIONS} from "react-native-permissions";

import {Firestore} from "../utils/firebase";

import {default as DeviceContacts} from "react-native-contacts";

export default function useContacts() {
    const [contacts, setContacts] = useState([]);
    
    useEffect(() => {
        
        async function getContacts() {
            
            try {

                let deviceContacts = await DeviceContacts.getAll();

                let emails = deviceContacts
                    .filter((deviceContact) => deviceContact.emailAddresses.length > 0)
                    .map(emailContact => emailContact.emailAddresses[0].email);
            
                let results = await Firestore.collection("users").where("emailAddress", "in", emails).get();

                let wazzapContacts = [];
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