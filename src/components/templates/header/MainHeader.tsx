import { Link } from "react-router-dom";
import { useState } from "react";
import Heading from "../../atoms/Text/Heading/Heading";
import MainNav from "./MainNav";
const MainHeader = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(true);
  return (
    <header
      className="p-10 bg-grey-500 rounded-b-lg lg:relative lg:rounded-lg overflow-hidden"
      style={{
        background:
          "url(/images/illustration-authentication.svg) no-repeat top center",
      }}
    >
      <Link
        to="/"
        className="block w-fit mx-auto lg:mx-[unset] lg:absolute z-10 p-5"
        role="link"
        aria-label="Go to homepage"
      >
        <img src="/images/logo-large.svg" alt="PersonalFinance App Logo" />
      </Link>
      {!loggedIn ? (
        <div className="relative h-fit place-content-end">
          <Heading variant="heading_lg" className="text-white">
            Keep track of your money and save for your future
          </Heading>
          <p className="text-white">
            Personal finance app puts you in control of your spending. Track
            transactions, set budgets, and add to savings pots easily.
          </p>
        </div>
      ) : (
        <MainNav />
      )}
    </header>
  );
};

export default MainHeader;
