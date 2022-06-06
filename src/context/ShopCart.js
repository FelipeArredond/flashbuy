import React, { createContext, useState, useEffect } from "react";
import { api } from "../App";

export const shopCart = createContext();

export default function ShopCart({children}){

    const [cartProducts, setCartProducts] = useState([]);

    const [total, setTotal] = useState(0)

    const getProducts = async (num) =>{
        const response = await fetch(api+'/'+num);
        const products = await response.json()
        setCartProducts(cartProducts => [...cartProducts,products])
    }

    return <shopCart.Provider value={{
        getProducts,
        cartProducts,
        setCartProducts,
        total,
        setTotal
    }}>
        {children}
    </shopCart.Provider>
}