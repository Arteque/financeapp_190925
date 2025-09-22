import { NavLink } from "react-router-dom";
import Link from "../atoms/links/Link";
import NavList from "./NavList";

type HeaderProps = {
  loged: boolean;
};

const CURRENT = {
  filters:
    "invert-[39%] sepia-[98%] saturate-[749%] hue-rotate-[169deg] brightness-[91%] contrast-[87%]",
  filter:
    "[&_img]:invert-[.3] [&_img]:sepia-[.5] [&_img]:saturate-[100%] [&_img]:hue-rotate-[128deg] [&_img]:brightness-[93%] [&_img]:contrast-[93%]",
};

const Header = ({ loged }: HeaderProps) => {
  return loged ? (
    <header className="bg-grey-500 text-grey-100 fixed bottom-0 left-0 right-0">
      <NavList />
    </header>
  ) : (
    <header className="bg-grey-500 text-grey-100 py-[1.5rem] px-[2.5rem]">
      <Link className="mx-auto block w-fit" href="/">
        <img src="/images/logo-large.svg" alt="Finance" />
      </Link>
    </header>
  );
};
export default Header;
