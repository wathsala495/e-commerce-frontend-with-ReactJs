import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartSlice'
import productSlice from './productSlice'

const store=configureStore({
    reducer:{
        //reducers
        cart:cartSlice,
        product:productSlice

    }
})

export default store