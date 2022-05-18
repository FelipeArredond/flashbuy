import ProductComponent from "./ProductComponent";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


const ProductScanComponent = () => {

    const [products, setProducts] = useState([]);

     const getProducts = async () =>{
        const response = await fetch('http://localhost:53000/products');
        const products = await response.json()
        setProducts(products)
    }

    const location = useLocation();

    useEffect(() => {
        getProducts()
    }, [])

    const productsMap = products.map((product) => {
        return (
                <ProductComponent name={product.name}
                price={product.price} />
        );
    });
    
    var price = 0;

    const priceFinder = products.map((product) => {
        return (
                price = price + parseInt(product.price,10)
        );
    });

    const [payValue, setPayValue] = useState(price);
    var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const [currentDateTime, setCurrentDateTime] = useState(date)
    
    return(
            <div className="productsContainer"> 
                <Navbar/>
                <div className="products_scanned">
                    <div className="products_path">
                        <h1>Productos Escaneados</h1>
                        {productsMap}
                    </div>
                    <div className="products_info_path">
                        <h1>Informacion de Pago</h1>
                        <h3 className='total_to_pay'>
                            {currentDateTime}</h3>
                        <h3 className="total_to_pay">Hola {location.state.username}!</h3>
                        <h3 className='total_to_pay'>
                            Total a Pagar: $ {payValue}</h3>
                        <button className="pay_button">Ir a pagar!</button>    
                    </div>
                </div>
            </div>
    );
}

export default ProductScanComponent;