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
       <div>
        <p>{contador}</p>
        <button onClick={(suma)}>Sumar</button>
        <button onClick={(resta)}>Restar</button>
        <button onClick={agregar}>Añadir al carrito</button>
       </div>
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