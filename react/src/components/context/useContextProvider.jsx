
import { createContext, useContext, useState } from "react";
// import axiosClient from "../../axios-client";


const StateContext = createContext()

export const ContextProvider = ({children}) =>{
    const [role,setRole] = useState(null)
    const [token,_setToken] = useState(localStorage.getItem('ACCESS-TOKEN'));
    const [authRole,_setAuthRole] = useState(localStorage.getItem('USER'))

    const setToken =(token)=>{
        _setToken(token)
        if(token){
            localStorage.setItem('ACCESS-TOKEN',token)
        }else{
            localStorage.removeItem('ACCESS-TOKEN')
        }
    }

    const setAuthRole =(token)=>{
        _setAuthRole(token)
        if(token){
            localStorage.setItem('USER',token)
        }else{
            localStorage.removeItem('USER')
        }
    }

    return(
        <StateContext.Provider value={{
            role,
            token,
            authRole,
            setToken,
            setRole,
            setAuthRole,
         }}>
        {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext)

