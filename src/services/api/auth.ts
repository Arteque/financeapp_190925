import axios from "axios"

// Axios Interceptor für Authorization Header
axios.interceptors.request.use((config) => {
    const authStorage = localStorage.getItem('auth-storage');
    if (authStorage) {
        try {
            const authData = JSON.parse(authStorage);
            if (authData.state?.token && !authData.state.token.startsWith('demo-token-')) {
                config.headers.Authorization = `Bearer ${authData.state.token}`;
            }
        } catch (error) {
            console.warn('Failed to parse auth token:', error);
        }
    }
    return config;
});

export const authService = {
    getCurrentUser: async () => {
        const response = await axios.get("/api/auth/me")
        return response.data
    },

    login: async (credentials: { email: string; password: string }) => {
        const response = await axios.post("/api/auth/login", credentials);
        return response.data
    },

    register: async (credentials: { email: string; password: string; name: string }) => {
        const response = await axios.post("/api/auth/register", credentials);
        return response.data
    },

    logout: async () => {
        await axios.post("/api/auth/logout")
    }
}