import ProductComponent from "./ProductComponent";
import Navbar from "./Navbar";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../context/User";
import Modal from "./Modal";
import { shopCart } from "../context/ShopCart";
import { useNavigate } from "react-router-dom";


const ProductScanComponent = () => {

    const [payValue, setPayValue] = useState(0);

    const {userData} = useContext(userContext)
    const {cartProducts, setTotal, setCartProducts} = useContext(shopCart)

    const navigate = useNavigate()

    const productsMap = cartProducts.map(product => {
        return (
                <ProductComponent name={product.name}
                price={product.price} />
        );
    });

    useEffect(()=>{
        cartProducts.map((product) => {
            setPayValue(payValue + parseInt(product.price,10))
        });
    },[cartProducts])

    const handleReceiptGen = () =>{
        setTotal(payValue)
        navigate('/receipt')
    }

    const handleResetAll = () =>{
        setCartProducts([])
        setPayValue(0)
    }

    var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const [currentDateTime, setCurrentDateTime] = useState(date)
    
    return(
            <div className="productsContainer"> 
                <Navbar tittle={'Volver'} />
                <div className="products_scanned">
                    <div className="products_path">
                        <h1>Productos Escaneados</h1>
                        {cartProducts.length===0?<h2>No hay productos aun</h2>:productsMap}
                        <Modal/>
                        {cartProducts.length!==0?<button className="bg-blue-300 text-black active:bg-blue-500 
                         font-bold px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ml-2 mt-2" onClick={handleResetAll}>Eliminar todo</button>:<a>.</a>}
                    </div>
                    <div className="products_info_path">
                        <h1>Informacion de Pago</h1>
                        <h3 className='total_to_pay'>
                            {currentDateTime}</h3>
                        <h3 className="total_to_pay">Hola {userData.name}!</h3>
                        <h3 className='total_to_pay'>
                            Total a Pagar: $ {payValue}</h3>
                        <button className="bg-blue-300 text-black active:bg-blue-500 
                         font-bold px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ml-2 mt-2" onClick={handleReceiptGen}>Generar Factura!</button>    
                    </div>
                </div>
            </div>
    );
}

export default ProductScanComponent;