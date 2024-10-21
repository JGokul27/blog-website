import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"


export const useAuthcontext = () => {
    const authcontext = useContext(AuthContext)

    if(!authcontext){
        throw new Error("Authentication is undefined")
    }
    return authcontext
}