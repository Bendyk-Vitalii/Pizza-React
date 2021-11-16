import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { commerce } from "../lib/commerce";

export const fetchCart = createAsyncThunk("cart/fetchCart", async function (_, {rejectWithValue}) {
  try {
    const data = await commerce.cart.retrieve()
    
    if (!data.id) {
      throw new Error('Server Error!')
    }
    return  data
  } catch (error) {
    return rejectWithValue(error.message)
  }
});

export const AddToCart = createAsyncThunk("cart/AddToCart", async function (productId, {rejectWithValue, dispatch}) {
  try {
    const data = await commerce.cart.add(productId)
     dispatch(addItem(data))
    if (!data.id) {
      throw new Error('Server Error!')
    }
  } catch (error) {
    return rejectWithValue(error.message)
  }
});

export const RemoveFromCart = createAsyncThunk("cart/removeFromCart", async function (productId, {rejectWithValue, dispatch}) {
  try {
    const data = await commerce.cart.remove(productId)
    dispatch(removeItem(productId))
    if (!data.id) {
      throw new Error('Can\'t delete product!')
    }

  } catch (error) {
    return rejectWithValue(error.message)
  }
});

export const EmptyCartHandler = createAsyncThunk("cart/emptyCart", async function (state, rejectWithValue, dispatch) {
  try {
    const data = await commerce.cart.empty()
    if (!data.id) {
      throw new Error('Can\'t delete product!')
    }

    dispatch(emptyCart())

  } catch (error) {
    return rejectWithValue(error.message)
  }
});

const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    status: null,
    error: null,
  },
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload)
    },
    removeItem(state, action) {
      state.cart = state.cart.filter(cart => cart.id !== action.payload.id)
    },
    emptyCart(state) {
      state.cart.cart = []
    }
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
    [fetchCart.rejected]: setError,
  },
});

export const {removeItem, emptyCart, addItem} = cartSlice.actions;
export default cartSlice.reducer;
