const { default: axios } = require("axios");

axios.defaults.baseURL="http://localhost:3003"

export const http={
    get:axios.get,
    post:axios.post,
    delete:axios.delete,
    put:axios.put
}