import { createBrowserRouter } from "react-router-dom"
import Root from "./Root"
import Login from "./Routes/Pages/Login/Login"
import ProtectedRoutes from "./Routes/ProtectedRoutes"
import Index from "./Routes/Pages/Dashboard"
import NotFound from "./Routes/Pages/Errors/NotFound"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "/",
                element: <ProtectedRoutes />,
                children: [
                    {
                        index: true, 
                        element: <Index />
                    },
                    {
                        path: "dashboard",
                        element: <Index />
                    }
                ]
            }
        ]
    },
    {
        path: "*", 
        element: <NotFound />
    }
])

export default router