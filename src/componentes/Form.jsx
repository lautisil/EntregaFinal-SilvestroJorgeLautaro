import React, { useContext, useState } from 'react'
import { FormControl, FormLabel, Input, Button, Spacer, Divider} from '@chakra-ui/react'

const Formulario = () => {


    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [orderId, setOrderId] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(nombre);
      };

      const order = {
        nombre,
        email,
      }


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
        </FormControl>
    </form>
  )
}

export default Formulario


/* 
<FormControl isRequired onSubmit={handleSubmit}>
<FormLabel>Nombre completo</FormLabel>
<Input placeholder='Nombre completo' onChange={(e)=> setNombre(e.target.value)}/>

<FormLabel>Email</FormLabel>
<Input placeholder='Email' type='text' name='email' value={formData.email}
  onChange={(e)=> setEmail(e.target.value)}/>

<Button colorScheme="blue" type="submit">
    Enviar
</Button>
</FormControl> */