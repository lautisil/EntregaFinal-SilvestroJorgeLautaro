import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup,Button } from '@chakra-ui/react'
import { useState } from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ( {stock, name, description, price, image} ) => {

  const [contador, setContador] = useState(0)
  
  return (
    <>
      <Card maxW='sm'>
          <CardBody>
              <Stack mt='6' spacing='3'>
                  {/* <img src={p.image} alt="" /> */}
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
                  <ItemCount />
              </ButtonGroup>
          </CardFooter>
      </Card>
    </>
  )
}

export default ItemDetail