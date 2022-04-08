import ProductComponent from "./ProductComponent";
import { useState } from "react";

const ProductScanComponent = () => {

    const [payValue, setPayValue] = useState(5000);

    return(
        <div className="products_scanned">
            <div className="products_path">
                <h1>Products</h1>
                <ProductComponent 
                name='Salchicha Ranchera'
                price='5000'/>
            </div>
            <div className="products_info_path">
                <h1>Price</h1>
                <h3 className='total_to_pay'>
                    Total a Pagar: $ {payValue}</h3>
            </div>
        </div>
    );
}

export default ProductScanComponent;