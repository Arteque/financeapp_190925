import { useRoutes } from "../../hooks/useRoutes";
import LinkNavIcon from "../molecules/LinkNavIcon";

const CURRENTSTYLING = {
  link: "border-b-4 border-green-100 bg-grey-100 [&_.icon]bg-green-100"
}

const NavList = ({ ...props }) => {
  const { routes, isActive } = useRoutes();

  return (
    <nav {...props}>
      <ul className="flex items-center justify-between pt-2">
        {routes.map((route) => (
          <li key={route.id}>
            <LinkNavIcon
              href={route.path}
              src={route.icon}
              icon={<img src={route.icon} alt={route.alt} />}
              className={`[&_.text]:hidden p-4 block rounded-t-[4px] flex-1 ${isActive(route.path) ? CURRENTSTYLING.link : ""}`}
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
