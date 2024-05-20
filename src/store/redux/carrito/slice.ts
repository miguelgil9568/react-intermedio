import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../../types/Product";

const initialState: Product[] = [];

export const useCarritoSlice = createSlice({
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

export default useCarritoSlice.reducer;