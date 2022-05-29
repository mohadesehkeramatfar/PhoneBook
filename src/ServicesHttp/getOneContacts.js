
import {http} from "./httpBaseUrl"

export default function getOneContact(id) {
    return http.get(`/contacts/${id}`)
}
