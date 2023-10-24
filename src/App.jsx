import React from 'react'
import NavBar from './componentes/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './componentes/ItemDetailContainer'
import ItemListContainer from './componentes/ItemListContainer'

const App = () => {

  return (
    <BrowserRouter>

      <NavBar />

      <Routes>

        <Route exact path='/' element={<ItemListContainer />}/>
        <Route exact path='/category/:categoryID' element={<ItemListContainer />}/>
        <Route exact path='/item/:id' element={<ItemDetailContainer />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App


/* <NavBar />
    <ItemListContainer greeting={"Bienvenido a mi e-commerce"}/>
    <Componente />
    <ItemCount /> */

/*
 props = informacion en objetos que se transmiten de componentes padres a componentes hijos

        useState
 const ["variable", "funcion modificadora"] = useState(0) asignar valor inicial (array,true,false,bouleano)
 Ejemplo:
 const [cantidad, setCantidad] = useState(0)
 console.log(cantidad)
 
        promesas(fullfiled - rejected - pending)
 */


/*  
 //Varaibles
  const greeting = "Bienvenida"
  const nombre = "NaturAle"
  const miArray = ["Rojo ","Verde ","Azul"]
  const persona = {
    nombre: "Juan",
    apellido: "Jose"
  }

 

 {greeting}
<Bienvenida nombre={nombre} miArray={miArray} persona={persona}/>
<ItemListContainer />
<h2>Cantidad: {cantidad} </h2>
<button onClick={()=>setCantidad(cantidad + 1)}>Sumar</button>
<button onClick={()=>setCantidad(cantidad - 1)}>Restar</button>
<h3>{texto}</h3>
<button onClick={()=>setTexto(texto + " modificado")}>Agregar "modificado"</button>
<button onClick={()=>setTexto("cambiado totalmente")}>Cambiar texto</button> 
*/


/* 
const tomarValor = (valor) => {
  console.log(`Valor: ${valor}`)
}

const user ={
  nombre:"Lautaro",
  apellido:"Silvestro",
  edad: 23
}

return (
  <>
  <Componente tomarValor={tomarValor} isAdmin={false} user={user}/>
  </>
)
*/