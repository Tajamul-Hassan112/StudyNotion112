import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState={
    totalItems:localStorage.getItem("totalItems")?JSON.parse(localStorage.getItem("totalItems")):null
}

const cartSlice=createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        setToken(state,value){
            state.user=value.payload;
        }
    }
})

export const {setUser}=cartSlice.actions;
export default cartSlice.reducer;