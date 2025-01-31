import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../../types/Product";
import { enqueueSnackbar } from "notistack";

const DEFAULTState: Product[] = [];

const initialState: Product[] = (()=>{
    const persistencia = localStorage.getItem("_redux_state_");
    console.log('persistencia ' + persistencia);
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
            enqueueSnackbar("El producto fue removido del carrito", {
                variant: "error",
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "center",
                },
              });
            return state.filter((product) => product.id !== action.payload);
        },updateProduct: (state, action: PayloadAction<any>) => {
          enqueueSnackbar("Producto agregado correctamente al carrito", {
              variant: "error",
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "center",
              },
            });
          return state.forEach((product) => product.id !== action.payload.product.id ? product : product.quantity = action.payload.quantity );
        }
    }
});

export const {addProduct, removeProduct, updateProduct} = useCarritoSlice.actions;
export default useCarritoSlice.reducer;