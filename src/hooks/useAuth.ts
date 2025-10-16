import {useQuery} from "@tanstack/react-query"
import { authService } from "../services/api/auth"

export const useAuth = () => {
    return useQuery({
        queryKey: ['auth', 'user'],
        queryFn: authService.getCurrentUser,
        retry: false
    })
}