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
     
    if (!data.success) {
      throw new Error('Server Error!')
    }
    dispatch(refreshState(data))
  } catch (error) {
    return rejectWithValue(error.message)
  }
});

export const RemoveFromCart = createAsyncThunk("cart/removeFromCart", async function (productId, {rejectWithValue, dispatch}) {
  try {
    const data = await commerce.cart.remove(productId)
    
    if (!data.success) {
      throw new Error('Can\'t delete product!')
    }
    dispatch(refreshState(data))
  } catch (error) {
    return rejectWithValue(error.message)
  }
});

export const EmptyCartHandler = createAsyncThunk("cart/emptyCart", async function (state,  {rejectWithValue, dispatch} ) {
  try {
    const data = await commerce.cart.empty()
    if (!data.success) {
      throw new Error('Can\'t delete product!')
    }

    dispatch(refreshState(data))

  } catch (error) {
    return rejectWithValue(error.message)
  }
});

export const UpdateCartQty = createAsyncThunk("cart/updateQtyCart", async function ({id, quantity},  {rejectWithValue, dispatch}) {
  try {
    const data = await commerce.cart.update(id, quantity)
    if (!data.success) {
      throw new Error('Can\'t add product!')
    }

    dispatch(refreshState(data))

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
    refreshState(state, {payload}) {
      state.cart = payload.cart
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
    [fetchCart.fulfilled]: (state, {payload}) => {
      state.status = "resolved";
      state.cart = payload;
    },
    [fetchCart.rejected]: setError,
  },
});

export const {removeItem, emptyCart, refreshState, modalsStore} = cartSlice.actions;
export default cartSlice.reducer;
