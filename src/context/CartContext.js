// import React, { useEffect, useState, useContext } from 'react';
// import { commerce } from './lib/commerce';
// export const CartContext = React.createContext([]);

// const [cart, setCart] = useState({})

//   const updateCartQty = async (productId, quantity) => {
//     const { cart } = await commerce.cart.update(productId, { quantity })
//     setCart(cart)
//   }

//   const RemoveFromCart = async (productId) => {
//     const { cart } = await commerce.cart.remove(productId)
//     setCart(cart)
//   }

//   const handleEmptyCart = async () => {
//     const { cart } = await commerce.cart.empty()
//     setCart(cart)
//   }