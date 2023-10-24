import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup,Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({name, id}) => {
    return (
        <div>
            <Card maxW='sm'>
                <CardBody>
                    <Stack mt='6' spacing='3'>
                        {/* <img src={image} alt="" /> */}
                        <p>Imagen</p>
                        <Heading size='md'>{name}</Heading>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            <Link to={`/item/${id}`}>
                                Ver detalles
                            </Link>
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Item