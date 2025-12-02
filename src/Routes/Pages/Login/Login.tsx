import TheLoginForm from "../../../components/templates/Forms/Login";

const Login = () => {
  return (
    <section
      className="mx-auto mt-[10svh] rounded-[0.75rem] bg-grey-100 m-[1rem] px-[1.25rem] py-[1.5rem] w-[calc(100%-1rem)] max-w-[35rem] "
      aria-labelledby="login-heading"
    >
      <TheLoginForm />
      <footer>
        <p className="text-center">
          <span className="text-grey-400 text_sm">
            Need to create an account?{" "}
          </span>
          <a
            className=" text-grey-500 underline underline-offset-2 font-bold text_sm--bold"
            href="/signup"
            title="No account yet? Sign up!"
          >
            Sign Up
          </a>
        </p>
      </footer>
    </section>
  );
};

export default Login;
