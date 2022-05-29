
import { http } from "./httpBaseUrl";

export default function postContact(newContact) {
    return ( 
                http.post("/contacts",newContact)
             );
}