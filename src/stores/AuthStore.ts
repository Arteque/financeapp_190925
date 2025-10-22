import {create} from 'zustand'
import {persist, createJSONStorage} from "zustand/middleware"

// Interface
interface AuthState {
    isLogged: boolean
    user: {
        id:string;
        name:string;
        email:string;
    } | null
    token: string | null,

    login:(use:AuthState['user'], token:string) => void
    logout: () => void
    setUser: (user:AuthState['user']) => void
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            // Intial state
            isLogged:false,
            user:null,
            token:null,

            // Actions
            login:(user, token) => set({
                isLogged: true,
                user,
                token
            }),

            logout: () => set({
                isLogged:false,
                user:null,
                token:null
            }),

            setUser:(user) => set({user})
        }),
        {
            name:"auth-storage",
            storage:createJSONStorage(() => localStorage),

            // Nur bestimmte Felder speichern
            partialize:(state) => ({
                isLogged:state.isLogged,
                user:state.user
            }),

            // Version 
            version:1,

            //Migration
            migrate:(persistedState:any, version:number) => {
                if(version === 0){
                    return {...persistedState, newField: 'defaultValue'}
                }
                return persistedState
            }
        }
    )
)