import React, { useEffect, useState } from 'react'
import { FormControl, FormLabel, Input, Button, Text, } from '@chakra-ui/react'
import { getFirestore, addDoc, collection } from "firebase/firestore";
import Swal from "sweetalert2";

const Formulario = () => {


    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [orderId, setOrderId] = useState("")

    const db = getFirestore()

    const handleSubmit = (e) => {
      e.preventDefault();
  
      Swal.fire({
        title: `Desea Finalizar la compra?`,
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/images/trees.png)",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si"
      }).then((resultado) => {
        if (resultado.isConfirmed) {
          
          addDoc(orderCollection, order).then(({id}) => {
            setOrderId(id);
          })
        }
      })  
    }
  
    useEffect(() => {
      if(orderId!==""){
        Swal.fire(`Gracias por su compra, tu orden de compra es: ${orderId}`)
              .then(() => {
                vaciarCarrito();
              }) 
              
      }
    }, [orderId])	
  
  
    const order={
      nombre,
      email,
    }
  
    const orderCollection=collection(db,"ordersReact");  

  return (
    <form onSubmit={handleSubmit}>
        <FormControl isRequired >
            <FormLabel>Nombre completo</FormLabel>
            <Input placeholder='Nombre completo' type='text' name='nombre'
              onChange={(e) => setNombre(e.target.value)}/>
            
            <FormLabel>Email</FormLabel>
            <Input placeholder='Email' type='text' name='email'
              onChange={(e) => setEmail(e.target.value)}/>

            <Button colorScheme="blue" type="submit">
                Finalizar compra
            </Button>
            <Text>
              Numero de orden: {orderId}
            </Text>
        </FormControl>
    </form>
  )
}

export default Formulario