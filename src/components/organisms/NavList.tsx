import { useRoutes } from "../../hooks/useRoutes";
import LinkNavIcon from "../molecules/LinkNavIcon";

const CURRENTSTYLING = {
  link: "border-green-100 bg-grey-100 [&_.icon]bg-green-100"
}

const NavList = ({ ...props }) => {
  const { routes, isActive } = useRoutes();

  return (
    <nav {...props}>
      <ul className="flex items-end justify-between pt-2">
        {routes.map((route) => (
          <li key={route.id} className="flex-1">
            <LinkNavIcon 
              href={route.path}
              src={route.icon}
              icon={<img src={route.icon} alt={route.alt} />}
              className={`block border-b-4 w-full [&_.text]:hidden p-4 rounded-t-[4px]`} 
              style={{borderBlockEnd:`${isActive(route.path)? "var(--green-100)":"transparent"}`}}
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
