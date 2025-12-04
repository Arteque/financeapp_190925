import Heading from "../../atoms/Text/Heading/Heading"
import SignupForm from "../../organisms/Form/SignupForm"

const TheSignup = () => {
  return (
    <>
        <Heading variant="heading_lg" children="Login" className="mb-5" />
        <SignupForm />
    </>
  )
}

export default TheSignup