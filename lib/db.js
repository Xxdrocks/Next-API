import axios from "axios";

const API = axios.create({
    baseURL: "https://rest-api-crud.setionugraha.my.id/api",
});

export default API;