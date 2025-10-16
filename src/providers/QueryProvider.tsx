import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import type { ReactNode } from "react"

const queryClient = new QueryClient({
    defaultOptions:{
        queries: {
            staleTime: 2 * 60 * 1000,    // 2 Min (Finance braucht frischere Daten)
            gcTime: 10 * 60 * 1000,      // 10 Min (wie lange im Speicher, v5: cacheTime -> gcTime)
            retry: 2,                     // 2 Versuche (wichtig für Geld-Daten)
            refetchOnWindowFocus: true,   // Refresh bei Tab-Wechsel
        }
    }
})

interface QueryProviderProps{
    children: ReactNode
}

export const QueryProvider = ({children}:QueryProviderProps) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}