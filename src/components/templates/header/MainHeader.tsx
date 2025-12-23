import { Link } from "react-router-dom";
import { useAuthStore } from "../../../stores/AuthStore";
import { useNavStat } from "../../../stores/NavStat";
import MainNav from "./MainNav";
const MainHeader = () => {

  const isLogged = useAuthStore((state) => state.isLogged);
  const isOpen = useNavStat((state) => state.isOpen)

  return (
    <header className="bg-grey-500 fixed top-0 w-full z-100 
    lg:sticky lg:top-0 lg:bottom-0 lg:left-0 lg:right-[unset] lg:h-screen lg:max-w-[600px] lg:rounded-lg lg:m-5">
      <Link
        to="/"
        className="block w-fit mx-auto lg:mx-[unset] lg:absolute z-10 p-5"
        role="link"
        aria-label="Go to homepage"
      >
      {
        isOpen ? <img src="/images/logo-large.svg" alt="PersonalFinance App Logo" /> : <img src="/images/logo-small.svg" alt="PersonalFinance App Logo" />
      }
      </Link>
      {
        !isLogged ? (
            <figure className="hidden lg:block">
              <img src="/images/illustration-authentication.svg" alt="Authentication Illustration" />
              <figcaption>
                <h2>
                  Keep track of your money
    and save for your future
                </h2>
                <p>
                  Personal finance app puts you in control of your spending. Track transactions, set budgets, and add to savings pots easily.
                </p>
              </figcaption>
            </figure>
        ): (
          <MainNav />
        )
      }    
    </header>
  );
};

export default MainHeader;
