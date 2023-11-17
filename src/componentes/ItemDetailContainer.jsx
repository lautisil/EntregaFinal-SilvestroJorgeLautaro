import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import listProducts from './ListProducts';
import { Center, Spinner, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

  const {id} = useParams()
  const [productoFiltrado, setProducto] = useState([])
  const [loader, setLoader] = useState([])
 
  useEffect(() => {
    const productFilterID = listProducts.find((item) => item.id === id)

    const mostrarProductos = new Promise((resolve, reject) => {
      if (productFilterID) {
        setTimeout(() => {
          resolve(productFilterID)
        }, 2000)
      } else {
        reject("No se encontraron productos")
      }
    })

    mostrarProductos
    .then((resultado) => {
      setLoader(false);
      setProducto(resultado); // Actualiza el estado con los resultados
    })
    .catch((error) => {
      console.log(error)
    })
}, [id])

  return (
    <>
      <Center p="1rem">
        {loader ? (
          <Spinner size="xl" />
        ) : productoFiltrado ? (
          <ItemDetail productoFiltrado={productoFiltrado} />
        ) : (
          <Text>No se encontraron productos</Text>
        )}
      </Center>
    </>
  )
}

export default ItemDetailContainer

/* {
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
} */