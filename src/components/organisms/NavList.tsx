import { useRoutes } from "../../hooks/useRoutes";
import LinkNavIcon from "../molecules/LinkNavIcon";
import { cn } from "../../tools/cn";


const NavList = ({ ...props }) => {
  const { routes, isActive } = useRoutes();

  return (
    <nav {...props}>
      <ul className="flex items-end justify-between pt-2">
        {routes.map((route) => {
          const isRouteActive = isActive(route.path);
          return (<li key={route.id} className="flex-1">
            <LinkNavIcon 
              href={route.path}
              src={route.icon}
              icon={<img src={route.icon} alt={route.alt} />}
              className={cn(
                "block w-full p-4 roundend-t-[4px]",
                "border-b-4 [&_.text]:hidden md:[&_.text]:block md:[&_.text]:mt-2 md:text-center",
                `[&_img]:opacity-0`,
                isRouteActive 
                ? "border-green-100"
                : "border-transparent"
              )} 
            >
              {route.name}
            </LinkNavIcon>
          </li>
        )})}
      </ul>
    </nav>
  );
};

export default NavList;
