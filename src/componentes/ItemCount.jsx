import { Box, Button, Flex, Spacer } from '@chakra-ui/react'
import React, { useState } from 'react'

const ItemCount = () => {

    const [contador, setContador] = useState(0)

    const suma = () => {
        contador < 10 ? setContador(contador + 1) : alert("No se cuenta con stock")
    }

    const resta = () => {
        contador > 0 ? setContador(contador - 1) : alert("No existe en el carrito")
    }

    const agregar = () => {
        alert(`Productos agregados: ${ contador}`)
    }

     return (
       <Flex>
            <Box>
                <Button variant="outline" colorScheme='white' onClick={resta}>-</Button>
                <Button>{contador}</Button>
                <Button variant="outline" colorScheme='white' onClick={suma}>+</Button>
            </Box>
            <Spacer />
            <Box>
                <Button onClick={agregar}>Añadir al carrito</Button>
            </Box>
       </Flex>
     )
}

export default ItemCount


/*
 const ItemCount = () => {

    const [contador, setContador] = useState(0)

    const suma = () => {
        contador < 10 ? setContador(contador + 1) : alert("No se cuenta con stock")
    }

    const resta = () => {
        contador > 0 ? setContador(contador - 1) : alert("No existe en el carrito")
    }

    const agregar = () => {
        alert(`Productos agregados: ${ contador}`)
    }

     return (
       <div>
        <p>{contador}</p>
        <button onClick={(suma)}>Sumar</button>
        <button onClick={(resta)}>Restar</button>
        <button onClick={agregar}>Añadir al carrito</button>
       </div>
     )
} 
*/