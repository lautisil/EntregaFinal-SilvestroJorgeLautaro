import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { Center, Spinner, Text } from '@chakra-ui/react'; 
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {

  const { id } = useParams()
  const [productoFiltrado, setProducto] = useState([])
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    const db = getFirestore();
    const oneItem = doc(db, "natura", `${id}`);

      getDoc(oneItem).then((snapshot) => {
        if (snapshot.exists()){
          const docs = snapshot.data()
          setProducto(docs)
          setLoader(false)
        } else {
          setLoader(false)
        }
      })
  }, [id]);

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
