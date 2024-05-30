import {configureStore} from "@reduxjs/toolkit";
import  blogsReducer from "../reducers/blogSlice.js";
export const store = configureStore({
    reducer:{
        blogs:blogsReducer,
    }
})