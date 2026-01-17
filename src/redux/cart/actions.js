import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./types";

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product
});

export const removeFromCart = (productId) => ({
    type: REMOVE_FROM_CART,
    payload: { id: productId }
});

export const clearCart = () => ({
    type: CLEAR_CART
});
