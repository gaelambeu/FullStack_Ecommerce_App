import React,{createContext} from "react";
import { BASE_URL } from "../config";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const register = (name, email, password) => {
        axios.post(`${BASE_URL}/register`, {
            name, email, password
        }).then(res => {

        }).catch(e => {
            console.log('register error ${e}');
        });
    };


    return (
        <AuthContext.Provider value="Test value changed">{children}</AuthContext.Provider>
    );
};