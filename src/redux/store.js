import { applyMiddleware, legacy_createStore } from "redux";
import { rootReducer } from "./rootReducer";
import logger from "redux-logger";

export const store = legacy_createStore(
    rootReducer,
    applyMiddleware(logger)
)