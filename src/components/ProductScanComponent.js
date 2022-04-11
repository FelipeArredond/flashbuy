import ProductComponent from "./ProductComponent";
import { useState } from "react";


const ProductScanComponent = ({products}) => {

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
        <div className="products_scanned">
            <div className="products_path">
                <h1>Productos Escaneados</h1>
                {productsMap}
            </div>
            <div className="products_info_path">
                <h1>Informacion de Pago</h1>
                <h3 className='total_to_pay'>
                    {currentDateTime}</h3>
                <h3 className='total_to_pay'>
                    Total a Pagar: $ {payValue}</h3>
                <button className="pay_button">Ir a pagar!</button>    
            </div>
        </div>
    );
}

export default ProductScanComponent;