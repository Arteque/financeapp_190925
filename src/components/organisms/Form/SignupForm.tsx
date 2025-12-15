import FormElement from '../../molecules/Forms/FormElement'
import ButtonElement from '../../molecules/Forms/FormField/ButtonElement'
import InputPassword from './InputPassword'
import InputText from './InputText'

interface SignupFormProps {
  onSubmit?: () => void;
}

const SignupForm = ({onSubmit}:SignupFormProps) => {
  return (
    <FormElement onSubmit={onSubmit}>
        <InputText id="Name" label='First-Name' placeholder='Your firstname' required className="mb-5" />
        <InputText id="Name" label='Last-Name' placeholder='Your lasttname' required className='mb-5'/>
        <InputText id="mail" label='E-Mail' placeholder='Your E-Mail' required className="mb-5" />
        <InputPassword id='pass' label='Password' placeholder='Password' type='password' />
        <InputPassword id='pass' label='Password' placeholder='Password' type='password' className='block mt-5' />
        <ButtonElement type='submit'>SignUp</ButtonElement>
    </FormElement>
  )
}

export default SignupForm