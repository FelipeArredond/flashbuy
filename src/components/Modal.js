import React, { useState, useContext, useRef } from "react";
import { shopCart } from "../context/ShopCart";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const {setAddProduct, getProducts} = useContext(shopCart)
  const id = useRef(1)
  const handleSubmitId = () =>{
      getProducts(id.current.value)
      setShowModal(false)
  }
  return (
    <>
      <button
        className="bg-blue-300 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 my-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Agregar mas productos
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-blue-200 outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-black rounded-t ">
                  <h3 className="text-3xl font=semibold">Añade un producto!</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-blue-200 rounded px-8 pt-6 pb-8 w-full" onSubmit={handleSubmitId}>
                    <label className="block text-black text-sm font-bold mb-1">
                      Ingresa el ID del producto
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" ref={id}/>
                    <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-black bg-blue-300 active:bg-blue-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={handleSubmitId}
                  >
                    Submit
                  </button>
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;