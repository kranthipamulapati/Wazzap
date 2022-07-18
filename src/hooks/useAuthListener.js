import {useState, useEffect} from "react";

import {Auth} from "../utils/firebase";

export default function useAuthListener() {
    const [user, setUser] = useState(false);

    useEffect(function() {

        const listener = Auth.onAuthStateChanged((User) => {
            setUser(User);
        });

        return () => listener();

    }, []);

    return user;
}