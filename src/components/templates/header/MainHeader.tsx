import { Link } from "react-router-dom"

const MainHeader = () => {
  return (
    <header className="bg-grey-500 rounded-b-[0.5rem] px-[2.5rem] py-[1.5rem]">
      <Link to="/" className="block w-fit mx-auto">
        <img src="/images/logo-large.svg" alt="PersonalFinance App Logo" />
      </Link>
    </header>
  )
}

export default MainHeader