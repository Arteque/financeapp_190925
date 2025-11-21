import { useState } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import InputText from "../../organisms/Form/InputText";

const Index = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const showPasswordHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <h2 className="heading_xl">Login</h2>
      <form action="">
          <div className="mail my-5">
            <InputText label="E-Mail" id="mail"  />
          </div>
        <div className="mail my-5">
          <label htmlFor="mail">E-Mail:*</label>
          <input
            type="email"
            required
            placeholder="example: yourmail@domain.com"
            className="input"
          />
          <span className="text_xs uppercase" aria-live="off">
            Info text
          </span>
        </div>

        <div className="pwd my-5">
          <label htmlFor="pwd">Password:*</label>
          <div className="widthicon">
            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder="Enter your password"
              className="input"
            />
            {showPassword ? (
              <button type="button" onClick={showPasswordHandler}>
                <FaEye />
              </button>
            ) : (
              <button type="button" onClick={showPasswordHandler}>
                <FaEyeSlash />
              </button>
            )}
          </div>
          <span className="text_xs uppercase" aria-live="off">
            Info text
          </span>
        </div>
      </form>
    </>
  );
};

export default Index;
