import Button from '../../atoms/Link'
import FormElement from '../../molecules/Forms/FormElement'
import InputPassword from './InputPassword'
import InputText from './InputText'

const SignupForm = () => {
  return (
    <FormElement >
        <InputText id="Name" label='First-Name' placeholder='Your firstname' required className="mb-5" />
        <InputText id="Name" label='Last-Name' placeholder='Your lasttname' required className='mb-5'/>
        <InputText id="mail" label='E-Mail' placeholder='Your E-Mail' required className="mb-5" />
        <InputPassword id='pass' label='Password' placeholder='Password' type='password' />
        <InputPassword id='pass' label='Password' placeholder='Password' type='password' className='block mt-5' />
        <Button type='submit' children="Signup" variant='primary' />
    </FormElement>
  )
}

export default SignupForm