import React, { useEffect, useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { GlobalStyle } from "./globalStyle"
import Hero from "./components/Hero"
import Products from "./components/Products"
import Feature from "./components/Feature"
import Footer from "./components/Footer"
import Aos from "aos"
import "aos/dist/aos.css"
import { commerce } from "./lib/commerce"
import { Element } from "react-scroll"
import { useDispatch } from "react-redux"
import { fetchCart } from "./Redux/cart"

export const CartContext = React.createContext([])

function App() {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()
    setProducts(data)
  }
  
  const getCart = () => dispatch(fetchCart())

  useEffect(() => {
    fetchProducts()
    getCart()
    Aos.init({ duration: 1000 })
  }, [])

  const pizza = products.filter((el) => el.sku === "pizza")
  const sweets = products.filter((el) => el.sku === "sweets")
  const productOfTheDay = products.filter((el) => el.sku === "Pizza of the Day")
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
