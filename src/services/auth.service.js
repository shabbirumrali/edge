import axios from 'axios'
import { data } from '../data/auth'

const API_URI = data
console.log(API_URI)
// REGISTER
const register = (username, email, password) => {
    const newUser = { username, email, password }
    API_URI.push(newUser)
    console.log(API_URI)
    return null
    // return axios.post(API_URI + "signup", {
    //     username,
    //     email,
    //     password
    // })
}

// LOGIN
const login = (email, password) => {
    return API_URI.map((user) => {
            if(email === user.email && password === user.password){
                localStorage.setItem("user", JSON.stringify(user))
            }
        })
    // return axios.post(API_URI + "login", {
    //     email,
    //     password
    // }).then((response) => {
    //     if(response.data.accessToken){
    //         localStorage.setItem("user", JSON.stringify(response.data))
    //     }
    //     return response.data
    // })
}

// LOGOUT
const logout = () => {
    localStorage.removeItem("user")
}

// GET CURRENT USER
const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"))
}

const AuthService = {
    register,
    login,
    logout,
    getCurrentUser
}

export default AuthService