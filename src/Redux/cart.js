import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { commerce } from "../lib/commerce";

export const fetchCart = createAsyncThunk("cart/fetchCart", async function () {
  try {
    const data = await commerce.cart.retrieve();
    return data;
  } catch (error) {
    alert(error);
  }
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    status: null,
    error: null,
  },
  reducers: {
    async handleAddToCart(product) {
      try {
        await commerce.cart.retrieve(product);
      } catch (error) {
        alert(error);
      }
    },
  },
  extraReducers: {
    [fetchCart.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchCart.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.cart = action.payload;
    },
  },
});

export const { handleAddToCart } = cartSlice.actions;

export default cartSlice.reducer;
