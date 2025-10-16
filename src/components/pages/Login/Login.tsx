import LoginForm from "../../templates/Form/LoginForm";
const Login = () => {
  return (
    <>
      <h2 className="heading_xl">Login</h2>
      <LoginForm />
      <p className="mt-4">
        Don't have an account? <a href="/register">Register</a>
      </p>
    </>
  );
};

export default Login;
