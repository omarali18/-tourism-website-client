import { useContext } from "react"
import { AuthComtext } from "../context/AuthProvider"


const useAuth = () => {
    return useContext(AuthComtext)
}

export default useAuth