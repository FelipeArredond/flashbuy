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
    
    return(
        <div className="products_scanned">
            <div className="products_path">
                <h1>Products</h1>
                {productsMap}
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