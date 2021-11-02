import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { GlobalStyle } from './globalStyle';
import Hero from './components/Hero';
import Products from './components/Products';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Cart from './components/Navbar/CartModal'
import Aos from "aos";
import "aos/dist/aos.css";
import { commerce } from '../src/lib/commerce'

function App() {
  //All product
  const [products, setProducts] = useState([])
  //add product cart to state
  const [cart, setCart] = useState({})
  
  const fetchProducts = async () => {
    const {data} = await commerce.products.list()
    setProducts(data)
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }
  //add cart to server
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)
    setCart(item.cart)
  }

  useEffect(() => {
    fetchProducts()
    fetchCart()
    Aos.init({duration: 1000 })
  }, [])

  return (
    <Router>
      <GlobalStyle />
      <Hero cart={cart} />
        <Products 
      heading='Choose your favorite' 
      data={products.filter((el) => el.sku === 'pizza')}
      buttonAddHandler={handleAddToCart}
      />

      <Feature 
      data={products.filter((el) => el.sku === 'Pizza of the Day')}
      buttonAddHandler={handleAddToCart}
      />

      <Products 
      heading='Choose sweets' 
      data={products.filter((el) => el.sku === 'sweets')}
      buttonAddHandler={handleAddToCart}
      />

      <Footer />
    </Router>
  );
}

export default App;
