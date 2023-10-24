import React, { useEffect } from 'react'
import { useState } from 'react'

const Componente = ( ) => {


    const [mensaje, setMensaje] = useState("Mensaje inicial")

    useEffect(() => {
        console.log("hola");
    }, [mensaje])

    return (
        <div>
            <p>{mensaje}</p>
            <button onClick={()=>setMensaje("Mensaje Modificado")}>Cambiar mensaje</button>
        </div>
    )
}

export default Componente

/* 
const Componente = ( {tomarValor} ) => {

    tomarValor(98)

    const [nombre, setNombre] = useState("Default")

    const [mensaje, setMensaje] = useState("Mensaje inicial")

    useEffect(() => {
        console.log("hola");
    }, [mensaje])


    return (
        <div>
            <h3>{nombre}</h3>

            <button onClick={()=> setNombre("Lauti")}>Cambiar
            </button>

            <p>{mensaje}</p>
            <button onClick={()=>setMensaje("Mensaje Modificado")}>Cambiar mensaje</button>
        </div>
    )
} 
*/