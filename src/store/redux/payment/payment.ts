import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../../types/Product";

const initialState: Product[] = [];

export const usePaymentSlice = createSlice({
    name: "carrito",
    initialState ,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.push(action.payload)
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            return state.filter((product) => product.id !== action.payload);
        }
    }
});

export default usePaymentSlice.reducer;