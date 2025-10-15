import { createBrowserRouter } from "react-router-dom"
import Root from "./template/Root"
import ProtectedRoute from "./components/pages/ProtectedRoute"
import NotFound from "./components/pages/NotFound/NotFound"
import Login from "./components/pages/Login/Login"

const router = createBrowserRouter([
    {
        path:"/",
        element:<Root />,
        children: [
            {
                path:"login",
                element:<Login />
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
