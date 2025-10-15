import { Navigate} from "react-router-dom"
import Root from "../../template/Root"
const ProtectedRoute = () => {
  const  user = true
  return user ? <Root /> : <Navigate to="/login" />
}

export default ProtectedRoute
