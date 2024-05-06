import getApiInstance from "./apiService";

const INSTANCE = getApiInstance();
const baseURL = "/countries"

const getCountries = () =>{
    return  INSTANCE.get(baseURL+ "/all")
}
export{getCountries}