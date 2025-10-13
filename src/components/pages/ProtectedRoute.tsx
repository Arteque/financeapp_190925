import { Navigate} from "react-router-dom"
import {useAuth} from "../../context/AuthContext"
import Root from "../../template/Root"
const ProtectedRoute = () => {
  const  {user} = useAuth()
  return user ? <Root /> : <Navigate to="/login" />
}

export default ProtectedRoute
