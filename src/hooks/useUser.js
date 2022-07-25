import {useState, useEffect} from "react";

import {Firestore} from "../utils/firebase";

export default function useUser(uid) {
    const [user, setUser] = useState(false);
    
    useEffect(() => {
        
        async function getUser() {
            let results = await Firestore.collection("users").where("userId", "==", uid).get();

            if(results.size) {
                results.forEach((User) => setUser({...User.data(), docId : User.id}));
            } else {
                setUser(null);
            }
            
        }

        if(uid) {
            getUser();
        } else {
            setUser(false);
        } 

    }, [uid]);

    return user;
}