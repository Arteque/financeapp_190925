import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <header className="bg-grey-500">
      <Link
        to="/"
        className="block w-fit mx-auto lg:mx-[unset] lg:absolute z-10 p-5"
        role="link"
        aria-label="Go to homepage"
      >
      <img src="/images/logo-large.svg" alt="PersonalFinance App Logo" />
      </Link>
    </header>
  );
};

export default MainHeader;
