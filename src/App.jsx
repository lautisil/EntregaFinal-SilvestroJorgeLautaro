import React from 'react'
import NavBar from './componentes/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './componentes/ItemDetailContainer'
import ItemListContainer from './componentes/ItemListContainer'
import Cart from './componentes/Cart'
import ShoppingCartProvider from './context/ShoppingCartContext'
import ItemDetail from './componentes/ItemDetail'

const App = () => {

  return (
    <BrowserRouter>

      <ShoppingCartProvider>

        <NavBar />
        
        <Routes>
  
          <Route exact path='/' element={<ItemListContainer />}/>
          <Route exact path='/category/:categoryID' element={<ItemListContainer />}/>
          <Route exact path='/item/:id' element={<ItemDetailContainer />} />
          <Route exact path='/cart' element={<Cart />} />
  
        </Routes>

      </ShoppingCartProvider>

    </BrowserRouter>
  )
}

export default App

/* const sinVocales = (e) => {
  if ( 
    e.key === "a"  ||
    e.key === "e"  ||
    e.key === "i"  ||
    e.key === "o"  ||
    e.key === "u"
  ) {
    e.preventDefault()
  } else {
    console.log(e.key)
  }
} */

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