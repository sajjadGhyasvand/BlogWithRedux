import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createUser, deleteUser, getAllUsers } from "../services/blogsServices";

export const fetchUsers = createAsyncThunk("/users/fetchUsers", async () => {
    const response = await getAllUsers();
    return response.data;
});

export const deleteApiUser = createAsyncThunk(
    "/users/deleteApiUser",
    async (initialUserId) => {
        await deleteUser(initialUserId);
        return initialUserId;
    }
);

export const addNewUser = createAsyncThunk(
    "/users/addNewUser",
    async (initialUser) => {
        const response = await createUser(initialUser);
        return response.data;
    }
);

const usersSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                return action.payload;
                //With returing a new result Immer will replace existing state with
                //whatever we return
            })
            .addCase(addNewUser.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(deleteApiUser.fulfilled, (state, action) => {
                return state.filter((user) => user.id !== action.payload);
            });
    },
});

export const selectAllUsers = (state) => state.users;
export const selectUserById = (state, userId) =>
    state.users.find((user) => user.id === userId);

export default usersSlice.reducer;
