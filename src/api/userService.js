import getApiInstance from "./apiService";

const INSTANCE = getApiInstance();
const baseURL = "/users"

const getUsers = () =>{
    return  INSTANCE.get(baseURL+ "/all")
}

const getUsersWithCountry = () => {
    return INSTANCE.get(baseURL + "/details")
}

const createUser = (user) => {
    return INSTANCE.post(baseURL + "/",user)
}

const sortUsersByAge = () => {
    return INSTANCE.get(baseURL + "/orderByAge")
}

export {getUsers, getUsersWithCountry,createUser, sortUsersByAge}



