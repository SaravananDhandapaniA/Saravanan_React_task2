import React, { useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cart from './Cart';
import Home from "./Home";
import {CartProvider} from "react-use-cart";




function App() {



  useEffect(() => {
    fetchAPI()
  },[])

  const fetchAPI =async ()=>{
    return fetch('http://localhost:5000/api/rates')
    .then(response => response.json())
    .then(data => { 
     
      console.log(data)
    });
  }

  return (
    <>
    <CartProvider>
    <Home />
    <Cart />
    
    </CartProvider>
    
    </>
  );
}

export default App;
