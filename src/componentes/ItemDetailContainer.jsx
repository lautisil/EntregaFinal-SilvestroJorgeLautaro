import React from 'react'
import listProducts from './ListProducts'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

  const productos = listProducts

  const mostrarProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {  //simular demora
        resolve(productos)
      }, 3000)
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
      <ItemDetail productos={productos}/>
    </>
  )
}

export default ItemDetailContainer