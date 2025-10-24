import {useRef, useState, useEffect} from "react"


const Login = () => {

    const userRef = useRef(null)
    const errRef = useRef(null)

    const [user, setUser] = useState<string | null>(null)
    const [pwd, setPwd] = useState<string | null>(null)
    const [errMsg, setErrMsg] = useState<string | null>(null)

  return (
    <>
    <h2 className="heading_xl">Login</h2>
    <form>
        <div className="flex flex-col gap-2">
            <label htmlFor="mail">E-Mail</label>
            <input type="email" placeholder="ex: yourmail@web.com" className="input w-fit"/>
            <span className="info">{errMsg}</span>
        </div>
        
    </form>
    </>
  )
}

export default Login