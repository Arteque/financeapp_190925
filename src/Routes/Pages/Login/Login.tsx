import clsx from "clsx";
import TheLoginForm from "../../../components/templates/Forms/Login";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section
      className={clsx("bg-grey-100 max-w-140 box")}
      aria-labelledby="login-heading"
    >
      <TheLoginForm />
      <footer>
        <p className="text-center">
          <span className="text-grey-400 text_sm">
            Need to create an account?{" "}
          </span>
          <Link
            className=" text-grey-500 underline underline-offset-2 font-bold text_sm--bold"
            to="/signup"
            title="No account yet? Sign up!"
          >
            Sign Up
          </Link>
        </p>
      </footer>
    </section>
  );
};

export default Login;
