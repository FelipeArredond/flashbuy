import { Link } from "react-router-dom";
import ProtectedRoutes ,{ logout } from "./protectedRoutes";

const Navbar = () =>{
    return(
    <div>
        <button className="backButton" onClick={logout}>
            <Link to={'/log'}>Volver</Link>
        </button>
    </div>
    );
}
export default Navbar;