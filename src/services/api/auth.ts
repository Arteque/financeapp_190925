import axios from "axios"

export const authService = {
    getCurrentUser: async () => {
        const response = await axios.get("/api/auth/me")
        return response.data
    },

    login:async (credentials: {email:string; password:string}) => {
        const response = await axios.post("/api/auth/login", credentials);
        return response.data
    },

    logout:async () => {
        await axios.post("/api/auth/logout")
    }
}
