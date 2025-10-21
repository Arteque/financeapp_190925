import { create } from "zustand"
import { persist } from "zustand/middleware"
import { authService } from "../services/api/auth"

interface User {
    id: string;
    email: string;
    name: string;
}

interface AuthState {
    user: User | null;
    token: string | null;
    isLoading: boolean;
    error: string | null;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string, name: string) => Promise<void>;
    logout: () => void;
    clearError: () => void;
    checkAuth: () => Promise<void>;
    updateUser: (userData: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set, get) => ({
            user: null,
            token: null,
            isLoading: false,
            error: null,

            login: async (email: string, password: string) => {
                set({ isLoading: true, error: null });
                
                try {
                    // Demo Login Check
                    if (email === 'demo@financeapp.com' && password === 'demo123') {
                        const demoUser = {
                            id: '1',
                            email: 'demo@financeapp.com',
                            name: 'Demo User'
                        };
                        
                        set({
                            user: demoUser,
                            token: 'demo-token-' + Date.now(),
                            isLoading: false,
                            error: null
                        });
                        return;
                    }

                    // Verwende authService für API Call
                    const data = await authService.login({ email, password });
                    
                    set({
                        user: {
                            id: data.user.id,
                            email: data.user.email,
                            name: data.user.name
                        },
                        token: data.token,
                        isLoading: false,
                        error: null
                    });

                } catch (error) {
                    let errorMessage = "An error has occurred";
                    
                    if (error instanceof Error) {
                        errorMessage = error.message;
                    } else if (error && typeof error === 'object' && 'response' in error) {
                        // Axios Error
                        const axiosError = error as any;
                        errorMessage = axiosError.response?.data?.message || 'Login failed';
                    }
                    
                    set({
                        error: errorMessage,
                        isLoading: false,
                        user: null,
                        token: null
                    });
                }
            },

            register: async (email: string, password: string, name: string) => {
                set({ isLoading: true, error: null });

                try {
                    // Da authService keine register-Funktion hat, direkte API-Call
                    const response = await fetch("/api/auth/register", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ email, password, name })
                    });

                    if (!response.ok) {
                        const errorData = await response.json();
                        throw new Error(errorData.message || "Registration error");
                    }

                    const data = await response.json();

                    set({
                        user: {
                            id: data.user.id,
                            email: data.user.email,
                            name: data.user.name
                        },
                        token: data.token,
                        isLoading: false,
                        error: null
                    });

                } catch (error) {
                    set({
                        error: error instanceof Error ? error.message : "An error has occurred",
                        isLoading: false
                    });
                }
            },

            logout: () => {
                const token = get().token;
                
                set({ user: null, token: null, error: null });
                
                // Verwende authService nur wenn kein Demo Token
                if (token && !token.startsWith('demo-token-')) {
                    authService.logout().catch(() => {
                        // Fehler werden ignoriert
                    });
                }
            },

            clearError: () => {
                set({ error: null });
            },

            checkAuth: async () => {
                const { token } = get();
                if (!token) {
                    set({ isLoading: false });
                    return;
                }

                // Demo Token Check
                if (token.startsWith('demo-token-')) {
                    set({
                        user: {
                            id: '1',
                            email: 'demo@financeapp.com',
                            name: 'Demo User'
                        },
                        isLoading: false
                    });
                    return;
                }

                set({ isLoading: true });

                try {
                    // Verwende authService für getCurrentUser
                    const userData = await authService.getCurrentUser();
                    
                    set({
                        user: {
                            id: userData.id,
                            email: userData.email,
                            name: userData.name
                        },
                        isLoading: false
                    });
                } catch (error) {
                    // Token ungültig oder API nicht erreichbar
                    set({ user: null, token: null, isLoading: false });
                }
            },

            updateUser: (userData: Partial<User>) => {
                const currentUser = get().user;
                if (currentUser) {
                    set({
                        user: {
                            ...currentUser,
                            ...userData
                        }
                    });
                }
            }
        }),
        {
            name: 'auth-storage',
            partialize: (state) => ({
                token: state.token,
                user: state.user
            }),
        }
    )
);