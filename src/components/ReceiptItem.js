const ReceiptItem = (props) => {
    return(
        <div>
            <h3>{props.name}   ${props.price}</h3>
        </div>
    );
}

export default ReceiptItem;