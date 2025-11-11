import {useState} from "react"

import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {

    const [errMsg, setErrMsg] = useState<string | null>(null)
    const [input, setInput] = useState<string>("")
    
    const [user, setUser ] = useState({ 
      mail:null,
      password:null
    })

    const inputHandler = (e:React.FormEvent<HTMLInputElement>)=> {
      
      const inputValue = (e.target as HTMLInputElement).value
      setInput(inputValue)
    }


    const [showPassword, setShowPassword] = useState<boolean>(true)

    const showPasswordHandler = (e:React.FormEvent<HTMLButtonElement>) => {
      e.preventDefault()
      setShowPassword(prev => !prev)
    }

  return (
    <section className="mx-auto mt-[10svh] rounded-[0.75rem] bg-grey-100 m-[1rem] px-[1.25rem] py-[1.5rem] w-[calc(100%-1rem)] max-w-[35rem] " aria-labelledby="login-heading">
      <header className="mb-[2rem]">
        <h2 className="heading_xl" id="login-heading">Login</h2>
      </header>
      <main>
        <form>
          <div className="flex flex-col gap-2 mb-[1rem]">
              <label className="text_xs--bold text-grey-400" htmlFor={`youremail`}>E-Mail</label>
              <input type="email" placeholder="ex: yourmail@web.com" className="input w-full" onChange={inputHandler} id={`youremail`}/>
              <span className="info">{errMsg}</span>
          </div>
          <div className="flex flex-col gap-2">
              <label className="text_xs--bold text-grey-400" htmlFor="pass">Password</label>
              <div className="relative">
                <input type={showPassword?"password":"text"} required placeholder="Password" className="input w-full" onChange={inputHandler} id="pass" />
                <button className="absolute top-0 bottom-0 px-4 right-0 " type="button" onClick={showPasswordHandler}>
                  {showPassword ? (
                      <FaEye />
                    ) : (
                      <FaEyeSlash />
                    )} 
                </button>
              </div>
              <span className="info">{errMsg}</span>
          </div>
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