import { configureStore } from '@reduxjs/toolkit';
import cart from "./cart"
import products from './products';

export default configureStore({
    reducer: {
      cart: cart,
      products: products,
    },
  });
  