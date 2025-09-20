import { useEffect, useState } from "react"
import Overview from "./Overview"
import Login from "../login/Login"


const Index = () => {
    const [login, setLogin] = useState<boolean>(false)

     useEffect(() =>{
        setLogin(!!localStorage.getItem("token"))
     },[])   

    return  login ? <Overview /> : <Login />
}

export default Index