import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup,Button } from '@chakra-ui/react'

const Item = ({nombre, descripcion, precio}) => {
    return (
        <div>
            <Card maxW='sm'>
                <CardBody>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{nombre}</Heading>
                        <Text>
                            {descripcion}
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            ${precio}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            Comprar ahora
                        </Button>
                        <Button variant='ghost' colorScheme='blue'>
                            Agregar al carrito
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Item