import {createSlice} from "@reduxjs/toolkit"

const state = {
    isLogged: false,
    username: "",
    token:"",
    expiresIn:""
}

export const authSlice = createSlice({
    name: "authSlice",
    initialState: state,
    reducers:{
        "login": (state, action)=>{
            state.isLogged = true,
            state.username = action.payload.username,
            state.expiresIn = action.payload.expiresIn,
            state.token = action.payload.token
        },
        "logout": (state, action)=>{
            state.isLogged = false,
            state.username = "",
            state.expiresIn = "",
            state.token = ""
        }
    }
})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;