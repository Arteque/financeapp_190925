import { Link } from "react-router-dom";
import { useAuthStore } from "../../../stores/AuthStore";
import { useNavStat } from "../../../stores/NavStat";
import MainNav from "./MainNav";
const MainHeader = () => {
  const isLogged = useAuthStore((state) => state.isLogged);
  const isOpen = useNavStat((state) => state.isOpen);

  return (
    <header className="sticky top-0 bottom-0">
      <div className="absolute top-0 left-0 w-full h-full">
        <Link
        to="/"
        className="block w-fit mx-auto lg:mx-[unset] lg:absolute z-10 p-5"
        role="link"
        aria-label="Go to homepage"
      >
        {isOpen ? (
          <img src="/images/logo-large.svg" alt="PersonalFinance App Logo" />
        ) : (
          <img src="/images/logo-small.svg" alt="PersonalFinance App Logo" />
        )}
      </Link>
      <figure className="hidden lg:block">
        <img
          src="/images/illustration-authentication.svg"
          alt="Authentication Illustration"
        />
        <figcaption>
          <h2>Keep track of your money and save for your future</h2>
          <p>
            Personal finance app puts you in control of your spending. Track
            transactions, set budgets, and add to savings pots easily.
          </p>
        </figcaption>
      </figure>
      </div>
    </header>
  );
};

export default MainHeader;
