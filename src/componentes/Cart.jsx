import React, { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'

const Cart = () => {

  const { cart, eliminarProducto, cartTotal} = useContext(CartContext)

  return (

    <>
    <h1>Carrito</h1>
    <div>
      {cart.map((p) => (
        <article key={p.id}>
            <h4>{p.nombre}</h4>
            <h4>{p.cantidad}</h4>
            <h4>${p.precio}</h4>
            <h4>${p.precio * p.cantidad}</h4>
            <div onClick={() => eliminarProducto(p.id)}> Eliminar producto</div>
        </article>
      ))}
      <h3 className='mt-3'>Total: ${cartTotal}</h3>
    </div>
  </>

  )
}

export default Cart