import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import { GlobalStyle } from './globalStyle';
import Hero from './components/Hero';
import Products from './components/Products';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Aos from "aos";
import "aos/dist/aos.css";
import { commerce } from '../src/lib/commerce'

function App() {

  useEffect(() => {
    Aos.init({duration: 1000 })
  }, [])

  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const {data} = await commerce.products.list()

    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' data={products.filter((el) => el.sku === 'pizza')}/>
      <Feature data={products.filter((el) => el.sku === 'Pizza of the Day')}/>
      <Products heading='Choose sweets' data={products.filter((el) => el.sku === 'sweets')}/>
      <Footer />
    </Router>
  );
}

export default App;
