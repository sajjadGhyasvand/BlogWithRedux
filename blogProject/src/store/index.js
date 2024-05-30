import {configureStore} from "@reduxjs/toolkit";
import  blogsReducer from "../reducers/blogSlice.js";
import usersReducers from "../reducers/userSlice.js";
export const store = configureStore({
    reducer:{
        blogs:blogsReducer,
        users:usersReducers,
    }
})