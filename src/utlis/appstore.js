import { configureStore } from "@reduxjs/toolkit";
import cartslice from "../utlis/cartslice"

const appstore=configureStore({
    reducer:{
        cart:cartslice
    }

})
export default appstore