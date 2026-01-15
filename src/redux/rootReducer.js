import { combineReducers } from "redux";
import productReducer from "./products/productReducer";
import cartReducer from "./cart/cartReducer";

export const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer
})