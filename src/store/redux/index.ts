import {configureStore, type Middleware } from "@reduxjs/toolkit"
import {reducer } from "../../"
import  useCarritoSlice from "./carrito/slice"
import  usePaymentSlice  from "./payment/payment";

export const store = configureStore({
    reducer : {
        carrito: useCarritoSlice,
        payment: usePaymentSlice
    }
});