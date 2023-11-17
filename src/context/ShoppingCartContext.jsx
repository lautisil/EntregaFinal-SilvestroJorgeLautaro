import { createContext, useState } from "react";
import listProducts from "../componentes/ListProducts";

export const CartContext = createContext(null);


export const ShoppingCartProvider =({ children }) => {

    const [cart, setCart] = useState([])
    const [badge, setBadge] = useState(0)

    const agregarAlCarrito = (productFilterID, cantidad) => {
    
        const {id, name, price} = productFilterID
    
        const exsiteProductoEnCarrito = cart.find((p) => p.id === id)
    
        if (exsiteProductoEnCarrito) {
            exsiteProductoEnCarrito.cantidad += cantidad
            setCart((cartOld) => cartOld.map(
                (p) => (p.id === id ? exsiteProductoEnCarrito : p))
                )
        } else {
            const nuevoProducto = {...productFilterID, cantidad}
            setCart((cartOld) => [...cartOld, nuevoProducto])

            setBadge((badgeOld) => badgeOld + 1)
        }
    }

    const eliminarProducto = (id) => {
        const prodElim = cart.find((p) => p.id === id)

        if (prodElim) {
            const cartNew = cart.filter((p) => p.id !== id)
            setCart(cartNew)
            setBadge((badgeOld) => Math.max(0, badgeOld - 1))
        }
    }

    const limpiarCart = () => {
        setCart([])
        setBadge(0)
    }

    const cartCantidad = () => {
        const cartCantidadProducto = cart.length
        setBadge(cartCantidadProducto)
    }

    const cartTotal = () => {
        const total = cart.reduce((acc, producto) => {
            return acc + producto.price * producto.cantidad
        },0)
        return total
    }

    console.log(cart);
    console.log(cartCantidad);

    return (
        <CartContext.Provider value={
            {
                cart,
                setCart,
                badge,
                setBadge,
                agregarAlCarrito,
                eliminarProducto,
                limpiarCart,
                cartCantidad,
                cartTotal
            }
            }>
            
            {children}
        </CartContext.Provider>
    )

}


export default ShoppingCartProvider