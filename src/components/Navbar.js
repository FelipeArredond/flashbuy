import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { shopCart } from "../context/ShopCart";
import ProtectedRoutes ,{ logout } from "./protectedRoutes";

const Navbar = ({tittle}) =>{

    const {setCartProducts} = useContext(shopCart);

    const navigate = useNavigate()

    const handleLogOut = () =>{
        setCartProducts([])
        logout()
        navigate('/')
    }

    return(
    <div className="mt-2">
        <button className="bg-blue-300 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" onClick={handleLogOut}>
            <Link to={'/'} className={'links'}>{tittle}</Link>
        </button>
    </div>
    );
}
export default Navbar;