import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/index.css";

import Root from "./components/templates/Root";
import Transactions from "./components/pages/dashboard/Transactions";
import Budgets from "./components/pages/dashboard/Budgets";
import Pots from "./components/pages/dashboard/Pots";
import RecurringBills from "./components/pages/dashboard/RecurringBills";
import Index from "./components/pages/dashboard/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h1>Oops! Something went wrong.</h1>,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/transactions",
        element: <Transactions />,
      },
      {
        path: "/budgets",
        element: <Budgets />,
      },
      {
        path: "/pots",
        element: <Pots />,
      },
      {
        path: "/recurring-bills",
        element: <RecurringBills />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
