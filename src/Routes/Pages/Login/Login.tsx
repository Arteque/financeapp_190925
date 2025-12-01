import {useState} from "react"

import { FaEye, FaEyeSlash } from "react-icons/fa";
import InputText from "../../../components/organisms/Form/InputText";
import InputPassword from "../../../components/organisms/Form/InputPassword";

const Login = () => {

    const [errMsg, setErrMsg] = useState<string | null>(null)
    const [input, setInput] = useState<string>("")
    
    const [user, setUser ] = useState({ 
      mail:null,
      password:null
    })


  return (
    <section className="mx-auto mt-[10svh] rounded-[0.75rem] bg-grey-100 m-[1rem] px-[1.25rem] py-[1.5rem] w-[calc(100%-1rem)] max-w-[35rem] " aria-labelledby="login-heading">
      <header className="mb-[2rem]">
        <h2 className="heading_xl" id="login-heading">Login</h2>
      </header>
      <main>
        <form>
          <InputText id="mail" label="E-Mail" required placeholder="xy@mail.com" />
          <InputPassword className="mt-5 block" id="pass" label="Password" placeholder="password" type="default"/>
          <button className="p-5 bg-grey-500 text-grey-100 font-bold rounded block w-full my-[2rem]" type="submit">Login</button>
      </form>
      </main>
      <footer>
        <p className="text-center"><span className="text-grey-400 text_sm">Need to create an account? </span> 
        <a className=" text-grey-500 underline underline-offset-2 font-bold text_sm--bold" href="/signup" title="No account yet? Sign up!">Sign Up</a></p>
      </footer>
    </section>
  )
}

export default Login