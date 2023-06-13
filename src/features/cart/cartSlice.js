import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
    cartItems : cartItems,
    amount : 4,
    total: 0,
    isLoading: true,
}

const cartslice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
    },
});

// console.log(cartslice)
export const { clearCart } = cartslice.actions;

export default cartslice.reducer;