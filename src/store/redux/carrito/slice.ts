import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../../types/Product";

const DEFAULTState: Product[] = [];

const initialState: Product[] = (()=>{
    const persistencia = localStorage.getItem("_redux_state_");
    console.log(persistencia);
    return persistencia ? JSON.parse(persistencia).carrito : DEFAULTState;
})();

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

export const {addProduct, removeProduct} = useCarritoSlice.actions;
export default useCarritoSlice.reducer;