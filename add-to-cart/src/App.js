import React, { useState,useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cart from './Cart';
import Home from "./Home";
import {CartProvider} from "react-use-cart";




function App() {

//  const [products,setProducts] = useState([]);

  useEffect(() => {
    fetchAPI()
  },[])

  const fetchAPI =async ()=>{
    return fetch('http://localhost:5000/api/rates')
    .then(response => response.json())
    .then(data => { 
      //setProducts(data)
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
