import React from 'react'
import { useState, useContext } from 'react'
import {CartContext} from '../context/ShoppingCartContext'
import { Box, Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup,Button } from '@chakra-ui/react'
import ItemCount from './ItemCount'


const ItemDetail = ( {productoFiltrado} ) => {

  const [cantidad, setCantidad] = useState(0)

  const {agregarAlCarrito} = useContext(CartContext)

  const enviarAlCarrito = () => {
    if (cantidad > 0) {
      agregarAlCarrito(productoFiltrado, cantidad)
    } else {
      alert("Debes seleccionar al menos una unidad para añadir al carrito")
    }
  }

  const suma = () => {
      cantidad < productoFiltrado.stock 
      ? setCantidad(cantidad + 1) 
      : alert("No se cuenta con stock")
  }

  const resta = () => {
      cantidad > 0 
      ? setCantidad(cantidad - 1) 
      : ""
  }

  console.log(cantidad);

  return (
    <>
      <Card maxW='sm'>
          <CardBody>
              <Stack mt='6' spacing='3'>
                  {/* <img src={image} alt="" /> */}
                  <p>Imagen</p>
                  <Heading size='md'>{productoFiltrado.name}</Heading>
                  <Text>
                    {productoFiltrado.description}
                  </Text>
                  <Text>
                    Precio por unidad: ${productoFiltrado.price}
                  </Text>
              </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
              <ButtonGroup spacing='2'>
                  <Box>
                    <ItemCount suma={suma} resta={resta} cantidad={cantidad} />
                    <Text>Precio total: ${productoFiltrado.price * cantidad}</Text>
                    <Button onClick={enviarAlCarrito}>Añadir al carrito</Button>
                  </Box>
              </ButtonGroup>
          </CardFooter>
      </Card>
    </>
  )
}

export default ItemDetail