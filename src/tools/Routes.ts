import type { RouteItem } from "../types/routeItem";

export const MyRoutes: RouteItem[] = [
  {
    id: 1,
    path: "/",
    name: "Overview",
    icon: "/images/icon-nav-overview.svg",
    alt: "Overview Icon",
  },
  {
    id: 2,
    path: "/transactions",
    name: "Transactions",
    icon: "/images/icon-nav-transactions.svg",
    alt: "Transactions Icon",
  },
  {
    id: 3,
    path: "/budgets",
    name: "Budgets",
    icon: "/images/icon-nav-budgets.svg",
    alt: "Budgets Icon",
  },
  {
    id: 4,
    path: "/pots",
    name: "Pots",
    icon: "/images/icon-nav-pots.svg",
    alt: "Pots Icon",
  },
  {
    id: 5,
    path: "/recurringbills",
    name: "Recurring Bills",
    icon: "/images/icon-nav-recurring-bills.svg",
    alt: "Recurring Bills Icon",
  },
];
