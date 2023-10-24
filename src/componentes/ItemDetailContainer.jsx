import React from 'react'
import listProducts from './ListProducts'
import ItemDetail from './ItemDetail'
import { Center } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

  const {id} = useParams()

  const productFilterID = listProducts.filter((producto) => producto.id == id)

  const mostrarProductos = new Promise((resolve, reject) => {
    if (listProducts.length > 0) {
      setTimeout(() => {  //simular demora
        resolve(listProducts)
      }, 2000)
    } else {
      reject("No se encontraron productos")
    }
  })

  mostrarProductos
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((error) => {
      console.log(error)
    })

  return (
    <>
      <Center p="1rem">
        {
          productFilterID.map((p) => {
            return (
              <ItemDetail
              key={p.id}
              id={p.id}
              name={p.name}
              description={p.description}
              price={p.price}
              image={p.image}
              stock={p.stock}
              />
            )
          })
        }
      </Center>
    </>
  )
}

export default ItemDetailContainer