import React, { useEffect } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { GlobalStyle } from "./globalStyle"
import Hero from "./components/Hero"
import Products from "./components/Products"
import Feature from "./components/Feature"
import Footer from "./components/Footer"
import Aos from "aos"
import "aos/dist/aos.css"
import { Element } from "react-scroll"
import { useDispatch, useSelector } from "react-redux"
import { fetchCart } from "./Redux/cart"
import { fetchProducts } from "./Redux/products"
//import { useFetchProductlist } from "./hooksV2.0/useFetchProducts"
import Loader from "react-spinners/ClipLoader"

function App() {
  const dispatch = useDispatch()
  const getCart = () => dispatch(fetchCart())
  const getProducts = () => dispatch(fetchProducts())

const {isLoading, isError} = getProducts
const {pizza, sweets, productOfTheDay } = useSelector((state => state.products))

  useEffect(() => {
    getProducts()
    getCart()
    Aos.init({ duration: 1000 })
  }, [])


  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Element name="pizza">
        <Products heading="Choose your favorite" data={pizza} />
      </Element>
      <Feature data={productOfTheDay} />
      <Element name="desserts">
        <Products heading="Choose sweets" data={sweets} />
      </Element>
      <Footer />
      {(() => {
            if (isLoading) {
              return <Loader />
            }
            if (isError) {
              return <div>...error</div>
            }
      })()}
    </Router> 
  )
}

export default App
