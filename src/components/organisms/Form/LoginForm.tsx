import FormElement from "../../molecules/Forms/FormElement"
import ButtonElement from "../../molecules/Forms/FormField/ButtonElement"
import InputPassword from "./InputPassword"
import InputText from "./InputText"

const LoginForm = () => {
  return (
    <FormElement>
        <InputText id="mail" label="E-Mail" required />
        <InputPassword id="pass" label="Password" placeholder="Password" type="password" />
        <ButtonElement type="submit" variant="primary">Login</ButtonElement>
    </FormElement>
  )
}

export default LoginForm