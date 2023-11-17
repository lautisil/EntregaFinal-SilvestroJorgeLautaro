import React from 'react'
import ItemList from './ItemList'
import { Center, Spinner, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore";


const ItemListContainer = () => {

  const {categoryID} = useParams()

  const [products, setProductos] = useState([])

  const [loader, setLoader] = useState(true)
  
  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "natura");
  
    getDocs(itemsCollection)
      .then((snapshot) => {
        const doc = snapshot.docs.map((doc) => doc.data());
        setProductos(doc);
        setLoader(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoader(false);
      });
  }, []);

  const productCategory = categoryID
  ? products.filter((item) => item.category === categoryID)
  : products;

  return (
    <>
      <Center p="1rem">
        {loader ? (
          <Spinner size="xl" />
        ) : categoryID ? (
        <ItemList products={productCategory} />
        ) : (
          <ItemList products={products} />
        )}
      </Center>
    </>
    
  )
}

export default ItemListContainer

/* useEffect(() => {
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
}) */
