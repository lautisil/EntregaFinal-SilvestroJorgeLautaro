import { createContext, useState } from "react";
import listProducts from "../componentes/ListProducts";


export const CartContext = createContext(null)


export const ShoppingCartProvider =({ children }) => {
        
        const [cart, setCart] = useState([])

        const agregarAlCarrito = (id, cantidad) => {

        }




        return (
            <CartContext.Provider value={(cart, setCart, agregarAlCarrito)}>
                {children}
            </CartContext.Provider>
        )

    }


export default ShoppingCartProvider