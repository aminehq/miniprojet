import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchproducts = createAsyncThunk(
    "products/fetchproducts",
    async()=>{
        const response=await fetch('https://dummyjson.com/products')
        const data = response.json().products
        return data
    }
)