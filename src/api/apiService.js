import axios from "axios";

const baseURL = 'http://localhost:8080/api/'
export default function getApiInstance(){
    return axios.create({
        baseURL:baseURL,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
    })
}