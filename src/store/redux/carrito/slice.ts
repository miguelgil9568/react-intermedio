import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../../types/Product";
import { enqueueSnackbar } from "notistack";

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
            enqueueSnackbar("Producto agregado correctamente al carrito", {
                variant:"success",
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "center",
                },
              });
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            enqueueSnackbar("Producto desagregado del carrito", {
                variant: "error",
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "center",
                },
              });
            return state.filter((product) => product.id !== action.payload);
        }
    }
});

export const {addProduct, removeProduct} = useCarritoSlice.actions;
export default useCarritoSlice.reducer;