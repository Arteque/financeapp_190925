import { Link } from "react-router-dom";
import { useState } from "react";
const MainHeader = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  return (
    <header className="bg-grey-500 rounded-b-lg lg:relative lg:rounded-lg overflow-hidden">
      <Link
        to="/"
        className="block w-fit mx-auto lg:mx-[unset] lg:absolute z-10 p-5"
        role="link"
        aria-label="Go to homepage"
      >
        <img src="/images/logo-large.svg" alt="PersonalFinance App Logo" />
      </Link>
      {!loggedIn && (
        <img
          src="/images/illustration-authentication.svg"
          alt="Illustration showing a person running towards money bills happily"
          className="absolute inset-0 w-full z-0"
        />
      )}
    </header>
  );
};

export default MainHeader;
