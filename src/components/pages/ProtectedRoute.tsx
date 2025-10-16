import {useState, useEffect} from "react"
import { Navigate } from "react-router-dom";
import Dashboard from "../templates/Dashboard/Dashboard";

const ProtectedRoute = () => {

  const [loggedin, setLoggedin] = useState<boolean>(false)

  

  return loggedin ? <Dashboard /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
