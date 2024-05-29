import {configureStore, type Middleware } from "@reduxjs/toolkit"
import {reducer } from "../../"
import  useCarritoSlice from "./carrito/slice"
import  usePaymentSlice  from "./payment/payment";

const persistencia : Middleware = (store) => (next)=> (action) => {
   next(action);
   console.log('pruductos '+store.getState());
   localStorage.setItem("_redux_state_", JSON.stringify(store.getState())) 
}

export const store = configureStore({
    reducer : {
        carrito: useCarritoSlice,
        payment: usePaymentSlice
    }, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat
    (persistencia)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;