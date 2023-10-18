import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'

const store = configureStore({
    reducer:{
        auth: authReducer,  
        //TODO: post: postSlice
    } 
})

export default store