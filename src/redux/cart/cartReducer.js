import { produce } from "immer";
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./types";

const initialState = {
  items: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return produce(state, (draft) => {
        const product = action.payload;
        const existing = draft.items.find((item) => item.id === product.id);

        if (existing) {
          existing.quantite += 1;
        } else {
          draft.items.push({ ...product, quantite: 1 });
        }
      });

    case REMOVE_FROM_CART:
      return produce(state, (draft) => {
        draft.items = draft.items.filter((item) => item.id !== action.payload.id);
      });

    case CLEAR_CART:
      return produce(state, (draft) => {
        draft.items = [];
      });

    default:
      return state;
  }
}
