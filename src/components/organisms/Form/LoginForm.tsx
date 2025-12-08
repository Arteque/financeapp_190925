import FormElement from "../../molecules/Forms/FormElement"
import ButtonElement from "../../molecules/Forms/FormField/ButtonElement"
import InputPassword from "./InputPassword"
import InputText from "./InputText"

const LoginForm = () => {
  return (
    <FormElement>
        <InputText autoComplete="Name" id="mail" label="E-Mail" required={true} placeholder="E-Mail" />
        <InputPassword id="pass" label="Password" placeholder="Password" type="password" className="mt-5 block" />
        <ButtonElement type="submit" variant="primary">Login</ButtonElement>
    </FormElement>
  )
}

export default LoginForm