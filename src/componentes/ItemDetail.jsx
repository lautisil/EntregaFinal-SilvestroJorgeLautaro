import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup,Button } from '@chakra-ui/react'
import { useState } from 'react'

const ItemDetail = ( {stock, name, description, price, image} ) => {

  const [contador, setContador] = useState(0)
  
  const suma = () => {
      contador < stock ? setContador(contador + 1) : ""
  }
  const resta = () => {
      contador > 0 ? setContador(contador - 1) : ""
  }
  const agregar = () => {
      contador > 0 ? alert(`Productos agregados: ${ contador }`) : ""
  }

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
                          ${price}
                        </Text>
                        <Text>
                          Total: ${price * contador}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button onClick={resta}>-</Button>
                        <Text onClick={agregar}>{contador}</Text>
                        <Button onClick={suma}>+</Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
    </>
  )
}

export default ItemDetail