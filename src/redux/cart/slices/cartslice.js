import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find(
        (item) => item.id === product.id
      );

      if (existing) {
        existing.quantite += 1;
      } else {
        state.items.push({ ...product, quantite: 1 });
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    clearCart: (state) => {
      state.items = [];
    },
  },

  selectors: {
    selectTotal: (state) =>
      state.items.reduce(
        (acc, item) => acc + item.price * item.quantite,
        0
      ),
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
} = cartslice.actions;

export const { selectTotal } = cartslice.selectors;

export default cartslice.reducer;