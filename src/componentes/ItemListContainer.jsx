import React from 'react'
import ItemList from './ItemList'
import listProducts from './ListProducts'
import { Center } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const ItemListContainer = () => {

  const {categoryID} = useParams()

  const [products, setProductos] = useState([])
  
  useEffect(() => {

      if (categoryID !== undefined) {
          const productCategory = listProducts.filter((ItemList) => ItemList.category == categoryID)
          setProductos(productCategory)

      } else {
          setProductos(listProducts)
      }
  }, [categoryID])

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
        <ItemList products={products} />
      </Center>
    </>
    
  )
}

export default ItemListContainer

