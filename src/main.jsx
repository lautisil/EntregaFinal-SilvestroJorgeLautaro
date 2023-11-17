import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDuXpZMNTfeJ87bfZQyj89keW4D5Xm96U4",
  authDomain: "reactjsecommerce-be5c2.firebaseapp.com",
  projectId: "reactjsecommerce-be5c2",
  storageBucket: "reactjsecommerce-be5c2.appspot.com",
  messagingSenderId: "142249549209",
  appId: "1:142249549209:web:9ed15370ed1662407e8708"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
     <App />
  </ChakraProvider>
)
