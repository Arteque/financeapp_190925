import Link from "../atoms/links/Link";
import NavList from "./NavList";

type HeaderProps = {
  loged: boolean;
};


const Header = ({ loged }: HeaderProps) => {
  return loged ? (
    <header className="bg-grey-500 text-grey-100 fixed bottom-0 left-0 right-0 px-[1rem] pt-[0.5rem]">
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
