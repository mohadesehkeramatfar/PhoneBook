import {http} from "./httpBaseUrl"

export default function updateContact(id,contact) {
    return http.put(`/contacts/${id}`,contact)
}