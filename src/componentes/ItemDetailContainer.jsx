import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { Center, Spinner, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {

  const { id } = useParams()
  const [productoFiltrado, setProducto] = useState([])
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const oneItem = doc(db, 'natura', `${id}`);

      try {
        const snapshot = await getDoc(oneItem);

        if (snapshot.exists())
        {
          const data = snapshot.data();
          setProducto({ id: id, ...data });
        } 
        else
        {
          console.log('No se encontró el producto');
        }
      } 
      catch (error) 
      {
        console.error('Error fetching data:', error);
      } 
      finally 
      {
        setLoader(false);
      }
    };

    fetchData();
  }, [id, setProducto, setLoader]);

  console.log(productoFiltrado);

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
