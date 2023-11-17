import React, { useState } from 'react'
import { FormControl, FormLabel, Input, Button, Spacer, Divider} from '@chakra-ui/react'

const Form = () => {


    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(nombre)
        console.log(email)
    }

  return (
        <FormControl isRequired onSubmit={handleSubmit}>
            <FormLabel>Nombre completo</FormLabel>
            <Input placeholder='Nombre completo' onChange={(e)=> setNombre(e.target.value)}/>
            
            <FormLabel>Email</FormLabel>
            <Input placeholder='Email' onChange={(e)=> setEmail(e.target.value)}/>

            <Button type='useSubmit'>Enviar</Button>
        </FormControl>
  )
}

export default Form