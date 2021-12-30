import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { commerce } from "../lib/commerce";


export const fetchProducts = createAsyncThunk("products/fetchProducts", async function (_, { rejectWithValue }) {
    try {
      const { data } = await commerce.products.list()
      
      if (!data[0].id) {
        throw new Error("Can't fetch products!")
      }
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  });

  const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
  }
  
  const productsSlice = createSlice({
    name: "products",
    initialState: {
      products: [],
      pizza: [],
      sweets: [],
      productOfTheDay: [],
      status: null,
      error: null,
    },
    extraReducers: {
      [fetchProducts.pending]: (state) => {
        state.status = "loading";
        state.error = null;
      },
      [fetchProducts.fulfilled]: (state, {payload}) => {
        state.status = "resolved";
        state.pizza = payload.filter((el) => el.sku === "pizza");
        state.sweets = payload.filter((el) => el.sku === "sweets");
        state.productOfTheDay = payload.filter((el) => el.sku === "Pizza of the Day");
      },
      [fetchProducts.rejected]: setError,
    },

  })

  export default productsSlice.reducer;