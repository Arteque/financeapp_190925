import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import "../styles/index.css"

import Root from './templates/Root'
import Overview from './pages/dashboard/Overview'
import Transactions from './pages/dashboard/Transactions'
import Budgets from './pages/dashboard/Budgets'
import Pots from './pages/dashboard/Pots'
import RecurringBills from './pages/dashboard/RecurringBills'
import Login from './pages/login/Login'


const router = createBrowserRouter([
  {
    path:"/",
    element:<Root />,
    errorElement:<h1>Oops! Something went wrong.</h1>,
    children: [
      {
        path:"/overview",
        element:<Overview />
      },
      {
        path:"/transactions",
        element:<Transactions />
      },
      {
        path:"/budgets",
        element:<Budgets />
      },
      {
        path:"/pots",
        element:<Pots />
      },
      {
        path:"/recurring-bills",
        element:<RecurringBills />
      },
      {
        path:"/login",
        element:<Login />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
