import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import cart from "./cart"

export default configureStore({
    reducer: {
      cart: cart,
    },
  });
  