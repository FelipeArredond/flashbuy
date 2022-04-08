import ProductComponent from "./ProductComponent";
import { products } from "../shared/products";



const ProductScanComponent = () => {
    return(
        <div className="products_scanned">
            <div className="products_path">
                <h1>Products</h1>
                <ProductComponent 
                name='Felipe'
                price='catorce años'/>
                <ProductComponent 
                name='Felipe'
                price='catorce años'/>
                <ProductComponent 
                name='Felipe'
                price='catorce años'/>
                <ProductComponent 
                name='Felipe'
                price='catorce años'/>
            </div>
            <div className="products_info_path">
                <h1>Price</h1>
            </div>
        </div>
    );
}

export default ProductScanComponent;