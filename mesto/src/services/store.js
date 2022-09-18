import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { applyMiddleware } from "@reduxjs/toolkit";
import { rootReducer } from "./slice";


export const store = configureStore({
    reducer: rootReducer,
    enhancers: [applyMiddleware(thunk)],
    devTools: process.env.NODE_ENV !== 'production',

})