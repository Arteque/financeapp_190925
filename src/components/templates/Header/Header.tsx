import Anchor from "../../atoms/Link/Anchor"
import { useAuthStore } from "../../../stores/authStore";
const Header = () => {

  const { user} = useAuthStore();
  
  return (
    
    <header className={`relative bg-grey-500 w-fit  max-w-[480px] ${!user ? "m-[20px]":""}`} >
        <Anchor href="/" className="block p-[40px] mx-auto w-fit absolute">
            <img src="/images/logo-large.svg" alt="Finance app logo" />
        </Anchor>
        {
          !user  && <>
            <img src="/images/illustration-authentication.svg" alt="" />
        <div className="p-5 absolute bottom-0 text-white">
            <h2 className="heading_xl text-white">Keep track of your money and save for your future</h2>
        <p>Personal finance app puts you in control of your spending. Track transactions, set budgets, and add to savings pots easily.</p>
        </div>
        </>
        }
     </header>
  )
}

export default Header