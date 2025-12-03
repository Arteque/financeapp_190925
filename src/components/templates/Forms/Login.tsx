import Heading from "../../atoms/Text/Heading/Heading";
import LoginForm from "../../organisms/Form/LoginForm";

const TheLoginForm = () => {
  return (
    <>
      <header className="mb-5">
        <Heading as="h2" variant="heading_xl">
          Login
        </Heading>
      </header>
      <main>
        <LoginForm />
      </main>
    </>
  );
};

export default TheLoginForm;
