import { useRoutes } from "../../hooks/useRoutes";
import LinkNavIcon from "../molecules/LinkNavIcon";

const NavList = ({ ...props }) => {
  const { routes, isActive } = useRoutes();

  return (
    <nav {...props}>
      <ul>
        {routes.map((route) => (
          <li key={route.id}>
            <LinkNavIcon
              href={route.path}
              src={route.icon}
              icon={<img src={route.icon} alt={route.alt} />}
              isActive={isActive(route.path) ? "current" : ""}
            >
              {route.name}
            </LinkNavIcon>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavList;
