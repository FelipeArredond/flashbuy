
const ProductComponent = (props) => {
    return(
        <div>
            <h3 className='product_name'>{props.name}   ${props.price}</h3>
        </div>
    );
}

export default ProductComponent;