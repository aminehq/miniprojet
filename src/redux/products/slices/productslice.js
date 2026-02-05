import { createSlice } from "@reduxjs/toolkit";
import { fetchproducts } from "./productthunk";

const initialState = {
  status: "idle",
  items: [],
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchproducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchproducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchproducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
  selectors: {
    allProduits: (state) => state.items,
    findProduitParId: (state, id) =>
      state.items.find((el) => el.id === id),
    findProduitParcategory: (state, category) =>
      state.items.filter((el) => el.category === category),
  },
});

export const {
  allProduits,
  findProduitParId,
  findProduitParcategory,
} = productSlice.selectors;

export default productSlice.reducer;