import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    category: "beauty",
    price: 9.99,
    stock: 99,
    thumbnail: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
  },
  {
    id: 2,
    title: "Eyeshadow Palette with Mirror",
    category: "beauty",
    price: 19.99,
    stock: 34,
    thumbnail: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp"
  },
  {
    id: 3,
    title: "Powder Canister",
    category: "beauty",
    price: 14.99,
    stock: 89,
    thumbnail: "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp"
  },
  {
    id: 4,
    title: "Red Lipstick Matte",
    category: "beauty",
    price: 12.49,
    stock: 120,
    thumbnail: "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp"
  },
  {
    id: 5,
    title: "Liquid Foundation",
    category: "beauty",
    price: 22.99,
    stock: 60,
    thumbnail: "https://cdn.dummyjson.com/product-images/beauty/liquid-foundation/thumbnail.webp"
  },
  {
    id: 6,
    title: "Perfume Oil",
    category: "fragrances",
    price: 39.99,
    stock: 25,
    thumbnail: "https://cdn.dummyjson.com/product-images/fragrances/perfume-oil/thumbnail.webp"
  },
  {
    id: 7,
    title: "Brown Perfume",
    category: "fragrances",
    price: 29.99,
    stock: 40,
    thumbnail: "https://cdn.dummyjson.com/product-images/fragrances/brown-perfume/thumbnail.webp"
  },
  {
    id: 8,
    title: "Fog Scent Xpressio",
    category: "fragrances",
    price: 13.99,
    stock: 90,
    thumbnail: "https://cdn.dummyjson.com/product-images/fragrances/fog-scent-xpressio/thumbnail.webp"
  },
  {
    id: 9,
    title: "Gaming Laptop Dell G15",
    category: "electronics",
    price: 999.99,
    stock: 12,
    thumbnail: "https://cdn.dummyjson.com/product-images/pc/dell-g15-laptop/thumbnail.webp"
  },
  {
    id: 10,
    title: "Mechanical Gaming Keyboard",
    category: "electronics",
    price: 129.99,
    stock: 45,
    thumbnail: "https://cdn.dummyjson.com/product-images/pc/mechanical-keyboard/thumbnail.webp"
  },
  {
    id: 11,
    title: "Wireless Gaming Mouse",
    category: "electronics",
    price: 59.99,
    stock: 80,
    thumbnail: "https://cdn.dummyjson.com/product-images/pc/wireless-mouse/thumbnail.webp"
  },
  {
    id: 12,
    title: "27-inch 4K Monitor",
    category: "electronics",
    price: 349.99,
    stock: 20,
    thumbnail: "https://cdn.dummyjson.com/product-images/pc/27inch-4k-monitor/thumbnail.webp"
  },
  {
    id: 13,
    title: "Gaming Headset RGB",
    category: "electronics",
    price: 79.99,
    stock: 50,
    thumbnail: "https://cdn.dummyjson.com/product-images/pc/gaming-headset/thumbnail.webp"
  }
];

const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  selectors: {
    allProduits: (state) => state,
    findProduitParId: (state, id) =>
      state.find((el) => el.id == id),
    findProduitParcategory: (state, category) =>
      state.filter((el) => el.category === category),
  },
});

export const {
  allProduits,
  findProduitParId,
  findProduitParcategory,
} = productSlice.selectors;

export default productSlice.reducer;
