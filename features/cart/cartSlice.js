import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  checkout: false,
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        item => item.id !== action.payload
      );
    },

    clearCart: (state) => {
      state.cartItems = [];
    },

    checkout: (state) => {
      state.checkout = true;
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  checkout
} = cartSlice.actions;

export default cartSlice.reducer;
