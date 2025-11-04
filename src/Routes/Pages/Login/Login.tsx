import {useState} from "react"


const Login = () => {

    const [errMsg, setErrMsg] = useState<string | null>(null)
    const [input, setInput] = useState<string>("")
    
    const [user, setUser ] = useState({
      mail:null,
      password:null
    })

    const inputHandler = (e:React.FormEvent<HTMLInputElement>)=> {
      
      const inputValue = (e.target as HTMLInputElement).value
       console.dir(inputValue)
      setInput(inputValue)
    }

  return (
    <>
    <h2 className="heading_xl">Login</h2>
    <form>
        <div className="flex flex-col gap-2">
            <label htmlFor="mail">E-Mail</label>
            <input type="email" placeholder="ex: yourmail@web.com" className="input w-fit" onChange={inputHandler} />
            <span className="info">{errMsg}</span>
        </div>
        
    </form>
    </>
  )
}

export default Login