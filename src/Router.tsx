import { createBrowserRouter } from "react-router-dom"
import Root from "./template/Root"
import LoginPage from "./pages/LoginPage"
import ProtectedRoute from "./components/pages/ProtectedRoute"
import NotFound from "./pages/NotFound"

const router = createBrowserRouter([
    {
        path:"/",
        element:<Root />,
        children: [
            {
                path:"login",
                element:<LoginPage />
            },
            {
                path:"/",
                element:<ProtectedRoute />,
                children:[
                    {
                        //Paths
                    }
                ]
            }
        ]
    },
    {path:"*", element:<NotFound />}
])

export default router
