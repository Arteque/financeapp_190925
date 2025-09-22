import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import { MyRoutes } from "../tools/Routes";

const routes = MyRoutes;

export const useRoutes = () => {
  const location = useLocation();

  const currentRoute = useMemo(() => {
    return routes.find((route) => route.path === location.pathname);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const getAllRoutes = () => routes;

  const getAvailableRoutes = () => {
    return routes.filter((route) => route.path !== location.pathname);
  };

  return {
    routes,
    currentRoute,
    isActive,
    getAllRoutes,
    getAvailableRoutes,
    currentPath: location.pathname,
  };
};
