import React, { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import { Center, Divider, Button, Text, Spacer } from '@chakra-ui/react'
import Formulario from './Form'

const Cart = () => {

  const { cart, eliminarProducto, cartTotal} = useContext(CartContext)


  return (

    <>
    <Center>
      {cart.length === 0 ? (
        <section>
          <p>
            El carrito esta vacio
          </p>
        </section>
    ) : (
    <div>
      <h1>CARRITO</h1>
      <Divider />
      {cart.map((p) => (
        <><Divider />
        <article key={p.id}>
          <Text >Producto: {p.name}</Text>
          <Text >Cantidad: {p.cantidad}</Text>
          <Text >Precio: ${p.price}</Text>
          <Text >Total/producto:${p.price * p.cantidad}</Text>
          <Spacer />
          <Button colorScheme="red" onClick={() => eliminarProducto(p.id)}> Eliminar producto</Button>
          <Spacer />
        </article></>
      ))}
      <Divider />
      <h3 className='mt-3'>Total: ${cartTotal()}</h3>
      <Formulario />
    </div>
    )}
    </Center>
  </>

  )
}

export default Cart