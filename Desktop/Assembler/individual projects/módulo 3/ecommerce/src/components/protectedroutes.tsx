import { Navigate } from "react-router-dom";
import { useAuthState } from "../context/authContext";



const ProtectedRoutes = ({component: Component}:{component: React.ElementType}) => {
    const {isAuthenticated}= useAuthState();
    return isAuthenticated ? <Component/> : <Navigate to="/"/> 
}

export default ProtectedRoutes