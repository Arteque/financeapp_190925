import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import InputText from "../../organisms/Form/InputText";
import ButtonCall from "../../molecules/Buttons/ButtonCall";

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
    <form action="">
      <InputText id="mail" infoText="" labelText="E-Mail" type="e-mail" />
      <div className="password flex gap_8">
        <InputText
          id="password"
          infoText={infoText}
          labelText="Password"
          type={passwordType}
          hasIcon
          icon={passwordVisibilityState ? <FaEye /> : <FaEyeSlash />}
          clickHanlder={passwordTextVisibilityHandler} 
          
        />
       
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
