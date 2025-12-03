import {createSlice} from "@reduxjs/toolkit"

const state = {
    isLogged: false,
    userId:"",
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
            state.userId = action.payload.userId,
            state.username = action.payload.username,
            state.expiresIn = action.payload.expiresIn,
            state.token = action.payload.token
        },
        "logout": (state, action)=>{
            state.isLogged = false,
            state.username = "",
            state.expiresIn = "",
            state.token = ""
        },
        "setToken":(state, action)=>{
            state.token=action.payload.newToken;
        }
    }
})

export const {login, logout, setToken} = authSlice.actions;
export default authSlice.reducer;