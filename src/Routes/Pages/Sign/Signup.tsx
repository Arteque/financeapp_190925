import { Link } from "react-router-dom"
import TheSignup from "../../../components/templates/Forms/Signup"

const Signup = () => {
  return (
    <section className="mx-auto mt-[10svh] bg-grey-100 m-4 max-w-140 box">
        
        <TheSignup />
        <footer className="text-center ">
          <p className="text-grey-400">
            Already have an account?  <Link
            className=" text-grey-500 underline underline-offset-2 font-bold text_sm--bold"
            to="/login"
            title="No account yet? Sign up!"
          >
            Login
          </Link>
          </p>
        </footer>

    </section>
  )
}

export default Signup