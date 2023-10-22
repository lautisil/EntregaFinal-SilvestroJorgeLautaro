import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = () => {

  const productos = [
    {id:"1" ,nombre:"Producto A" ,descripcion:"Descripcion del producto A" ,stock: 10 ,precio: 1000},
    {id:"2" ,nombre:"Producto B" ,descripcion:"Descripcion del producto B" ,stock: 20 ,precio: 1500},
    {id:"3" ,nombre:"Producto C" ,descripcion:"Descripcion del producto C" ,stock: 30 ,precio: 2000},
    {id:"4" ,nombre:"Producto D" ,descripcion:"Descripcion del producto D" ,stock: 40 ,precio: 2500}
  ]

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
      <ItemList productos={productos} />
    </>
    
  )
}

export default ItemListContainer