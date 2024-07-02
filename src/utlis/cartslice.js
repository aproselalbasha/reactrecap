import { createSlice } from "@reduxjs/toolkit";

const cartslice=createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        additems:(state,action)=>{
            state.items.push(action.payload)

        },
        removeitems:(state)=>{
            state.items.pop()

        },
        clearkart:(state)=>{
            // state.items.length=0 //you can use this 
            return {items:[]} //or this 
        }
    }
}

)

export default cartslice.reducer;
export const{additems,removeitems,clearkart}=cartslice.actions