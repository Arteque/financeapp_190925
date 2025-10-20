import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import InputText from "../../organisms/Form/InputText";

const LoginForm = () => {
  const infoText = "";

  const [passwordType, setPasswordType] = useState<string>("password");
  const [passwordVisibilityState, setPasswordVisibilityState] =
    useState<boolean>(false);

  const passwordTextVisibilityHandler = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    setPasswordVisibilityState(!passwordVisibilityState);
    setPasswordType(passwordVisibilityState ? "password" : "text");
  };

  return (
      <section className="container_32 bg-grey-100 w-fit rounded-2xl">
      <h2 className="heading_xl">Login</h2>
      <p className="mt-4">
        Don't have an account? <a href="/register">Register</a>
      </p>
      <form action="">
        <InputText id="mail" infoText="" labelText="E-Mail" type="email" required={true} placeholder="youremail@xy.com" className="mb-5"/>
        <div className="password flex gap_8">
          <InputText
            id="password"
            infoText={infoText}
            labelText="Password"
            required
            type={passwordType}
            hasIcon
            icon={passwordVisibilityState ? <FaEye /> : <FaEyeSlash />}
            clickHanlder={passwordTextVisibilityHandler} 
          />
        </div>
        <button type="submit" className="btn btn_primary btn_primary--dark text_sm--bold w-full">Login</button>
      </form>
      </section>
  );
};

export default LoginForm;
