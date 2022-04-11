import ProductComponent from "./ProductComponent";
import { useState } from "react";


const ProductScanComponent = ({products}) => {

    const [payValue, setPayValue] = useState(5000);

    const productsMap = products.map((product) => {
        return (
                <ProductComponent name={product.name}
                price={product.price} />
        );
    });

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