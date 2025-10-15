import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import InputText from "../../organisms/Form/InputText";

const LoginForm = () => {
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
    <form action="">
      <InputText id="mail" infoText="" labelText="E-Mail" type="e-mail" />
      <InputText
        id="password"
        infoText=""
        labelText="Password"
        type="password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
