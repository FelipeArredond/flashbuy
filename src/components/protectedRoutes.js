import { Navigate, Outlet } from "react-router-dom";
import LogComponent from "./LogComponent";

const user = {loggedIn: false}

export const login = () => {
    user.loggedIn = true;
    console.log(user.loggedIn)
}

export const logout = () => {
    user.loggedIn = false;
    console.log(user.loggedIn)
}

const useAuth = () => {
    return user && user.loggedIn;
}

const ProtectedRoutes = () =>{
    const isAuth = useAuth();
    return isAuth ? <Outlet/>: <Navigate to={'/log'}/>;
}

export default ProtectedRoutes;