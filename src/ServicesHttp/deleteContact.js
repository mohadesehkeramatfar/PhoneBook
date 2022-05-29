
import { http } from "./httpBaseUrl";
export default function deleteContact(id) {
  return  http.delete(`/contacts/${id}`)
}