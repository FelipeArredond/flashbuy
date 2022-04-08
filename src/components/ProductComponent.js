
const ProductComponent = (props) => {
    return(
        <div>
            <h3 className='product_name'>{props.name}</h3>
            <h3 className='product_price'>${props.price}</h3>
            <img src={require('../images/descarga.jpeg')}></img>
        </div>
    );
}

export default ProductComponent;