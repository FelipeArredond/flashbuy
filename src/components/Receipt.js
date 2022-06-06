import React, { useContext, useRef, Component } from "react";
import ReactToPrint from "react-to-print";
import { shopCart } from "../context/ShopCart";
import { userContext } from "../context/User";
import { useNavigate } from "react-router-dom";
import { logout } from "./protectedRoutes";
import Navbar from "./Navbar";
import ReceiptItem from "./ReceiptItem";

export default function Receipt(){

    const {userData} = useContext(userContext)
    const {total, cartProducts} = useContext(shopCart)
    const componentRef = useRef();

    const productsMap = cartProducts.map(product => {
        return (
                <ReceiptItem name={product.name}
                price={product.price} />
        );
    });

    return(
        <div className="w-full h-screen bg-white p-2" >
            <Navbar tittle={'Salir'} />
            <div ref={componentRef}>
                <h3 className="text-black">**********************Recibo de Pago**********************</h3>
                <h3>A nombre de {userData.name}</h3>
                <h3>Documento de identidad {userData.id}</h3>
                <h3>Productos</h3>
                <h3>------------------------------------------------------------------------------------------------</h3>
                {productsMap}
                <h1>Total a pagar $ {total}</h1>
                <h3>***********************************************************</h3>
            </div>
            <ReactToPrint
                trigger={() => <button className="bg-blue-300 text-black active:bg-blue-500 
                font-bold px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-2">Imprimir!</button>}
                content={() => componentRef.current} 
                documentTitle='Factura de pago'
                pageStyle='print'
            />
        </div>
    );
}