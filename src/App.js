import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import { GlobalStyle } from './globalStyle';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' data={productData}/>
      <Products heading='Choose sweets' data={productDataTwo}/>
      <Feature />
    </Router>
  );
}

export default App;
