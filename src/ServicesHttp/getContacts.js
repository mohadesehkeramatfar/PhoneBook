import { http } from "./httpBaseUrl";


export default function getContacts() {
    return ( 
                http.get("/contacts")
             );
}




