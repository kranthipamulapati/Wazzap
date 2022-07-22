import {useState, useEffect} from "react";

import {Toast} from "../utils/utils";
import {Firestore} from "../utils/firebase";

export default function useChat(userId, contactId) {
    const [chat, setChat] = useState(null);
    
    useEffect(() => {
        let room = {};

        async function createChat() {

            try {
                
                let result = await Firestore.collection("chats").add({
                    participants : [userId, contactId],
                    lastMessage : ""
                });
    
                room = await result.get();
                room = {
                    ...room.data(),
                    docId : room.id
                }
                setChat(room);
        
            } catch(e) {
                Toast(e.message);
            }
            
        }

        async function getChat() {

            try {
                
                let results = await Firestore.collection("chats").where("participants", "array-contains-any", [userId, contactId]).get();
                if(results.size === 0) {

                    createChat();

                } else {

                    results.forEach((chat) => room = {
                        ...chat.data(),
                        docId : chat.id
                    });
                    setChat(room);                    
                } 
        
            } catch(e) {
                Toast(e.message);
            }
            
        }

        getChat();
    }, []);

    return [chat, setChat];
}