import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice";
import userSlice from "../slices/userSlice";

const rootReducer = combineReducers({
    authReducer: authSlice,
    useReducer:  userSlice
})

export default rootReducer;