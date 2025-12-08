import Button from '../../atoms/Link'
import FormElement from '../../molecules/Forms/FormElement'
import InputPassword from './InputPassword'
import InputText from './InputText'

const SignupForm = () => {
  return (
    <FormElement >
        <InputText id="Name" label='Name' required={true} className="mb-5" />
        <InputText id="mail" label='E-Mail' required={true} className="mb-5" />
        <InputPassword id='pass' label='Create Password' type='password' info='Passwords must be at least 8 characters' />
        <Button type='submit' children="Create Account" variant='primary' />
    </FormElement>
  )
}

export default SignupForm