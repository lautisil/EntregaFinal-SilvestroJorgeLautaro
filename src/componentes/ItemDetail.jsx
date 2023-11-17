import React from 'react'
import { useState } from 'react'
import { Box, Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup,Button } from '@chakra-ui/react'
import ItemCount from './ItemCount'

const ItemDetail = ( {id, name, description, price, image} ) => {

  const enviarAlCarrito = () => agregarAlCarrito(id, cantidad)

  const [cantidad, setContador] = useState(0)

  const suma = () => {
      cantidad < 10 ? setContador(cantidad + 1) : alert("No se cuenta con stock")
  }

  const resta = () => {
      cantidad > 0 ? setContador(cantidad - 1) : ""
  }

  return (
    <>
      <Card maxW='sm'>
          <CardBody>
              <Stack mt='6' spacing='3'>
                  {/* <img src={image} alt="" /> */}
                  <p>Imagen</p>
                  <Heading size='md'>{name}</Heading>
                  <Text>
                    {description}
                  </Text>
                  <Text>
                    Precio por unidad: ${price}
                  </Text>
              </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
              <ButtonGroup spacing='2'>
                  <Box>
                    <ItemCount suma={suma} resta={resta} cantidad={cantidad} />
                    <Text>Precio total: ${price * cantidad}</Text>
                    <Button onClick={enviarAlCarrito}>Añadir al carrito</Button>
                  </Box>
              </ButtonGroup>
          </CardFooter>
      </Card>
    </>
  )
}

export default ItemDetail