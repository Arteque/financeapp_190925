import { createBrowserRouter } from "react-router-dom"
import Root from "./components/templates/Root"
import ProtectedRoute from "./components/pages/ProtectedRoute"
import NotFound from "./components/pages/NotFound/NotFound"
import Login from "./components/pages/Login/Login"
import Dashboard from "./components/templates/Dashboard/Dashboard"
// Weitere Pages importieren
// import Transactions from "./components/pages/Transactions/Transactions"
// import Budgets from "./components/pages/Budgets/Budgets"
// import Pots from "./components/pages/Pots/Pots"

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
                element: <ProtectedRoute />,
                children: [
                    {
                        index: true, // Default Route für "/"
                        element: <Dashboard />
                    },
                    {
                        path: "dashboard",
                        element: <Dashboard />
                    }
                    // Weitere geschützte Routen hier hinzufügen:
                    // {
                    //     path: "transactions",
                    //     element: <Transactions />
                    // },
                    // {
                    //     path: "budgets",
                    //     element: <Budgets />
                    // },
                    // {
                    //     path: "pots",
                    //     element: <Pots />
                    // }
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