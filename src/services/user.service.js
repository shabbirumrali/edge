import axios from "axios"
import authHeader from "./auth-header"

const API_URI = ''

const getPublicContent = () => {
    return axios.get(API_URI + "all")
}

const getUserBoard = () => {
    return axios.get(API_URI + "user", { headers: authHeader() })
}

const getAdminBoard = () => {
    return axios.get(API_URI + "admin", { headers: authHeader })
}

const UserServices = {
    getPublicContent,
    getUserBoard,
    getAdminBoard
}

export default UserServices