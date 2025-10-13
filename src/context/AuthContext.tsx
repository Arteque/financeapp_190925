import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
// define the shape of the AuthContext
interface AuthContextType{
    user: any;
    login: (userData:any) => void;
    logout: () => void;
}

// creating the context
const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider =  ({children}:{children:ReactNode}) => {
    const [user, setUser] = useState<any>(null)
    const login = (userData:any) => {
        setUser(userData);
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

// custom hook to use the AuthContext
export const useAuth = () => {
    const context = useContext(AuthContext)
    if(!context){
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}