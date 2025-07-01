import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../slices/AuthSlice"
import cartReducer from "../slices/CartSlice"
import profileReducer from "../slices/ProfileSlice"
const rootReducer=combineReducers({

auth:authReducer,
cart:cartReducer,
profile:profileReducer,
})

export default rootReducer;