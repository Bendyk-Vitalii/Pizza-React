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
import { useDispatch } from "react-redux"
import { fetchCart } from "./Redux/cart"
import { useFetchProductlist } from "./hooksV2.0/useFetchProducts"

function App() {
  const dispatch = useDispatch()
  const getCart = () => dispatch(fetchCart())

  const fetchProducts = useFetchProductlist()
  const {pizza, sweets, productOfTheDay} = fetchProducts.list

  useEffect(() => {
    getCart()
    Aos.init({ duration: 1000 })
  }, [])

  const MemoizedHeroComponent = React.memo(Hero)
  const MemoizedFooterComponent = React.memo(Footer)
  return (
    <Router>
      <GlobalStyle />
      <MemoizedHeroComponent />
      <Element name="pizza">
        <Products heading="Choose your favorite" data={pizza} />
      </Element>
      <Feature data={productOfTheDay} />
      <Element name="desserts">
        <Products heading="Choose sweets" data={sweets} />
      </Element>
      <MemoizedFooterComponent />
    </Router>
  )
}

export default App
