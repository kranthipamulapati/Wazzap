import {useState, useEffect} from "react";

import {Auth} from "../utils/firebase";

export default function useAuthListener() {
    const [user, setUser] = useState(null);

    useEffect(function() {
        const listener = Auth.onAuthStateChanged((User) => {

            if(User) {
                setUser(User);
            } else {
                setUser(null);
            }
        });

        return () => listener();
    }, []);

    return user;
}