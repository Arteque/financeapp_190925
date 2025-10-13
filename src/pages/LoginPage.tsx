import { useAuth } from "../context/AuthContext"

const LoginPage = () => {

    const {login}  = useAuth()

    const handleLogin = () => {
        login({name:"Demo User", email:"demo@example.com"})
    }

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LoginPage
