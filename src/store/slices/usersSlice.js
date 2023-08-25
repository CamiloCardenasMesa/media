import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";

const usersSlice = createSlice({
   name: "users",
   initialState: {
        data: [],
        isLoading: false,
        error: null,
   },
   extraReducers(builder) {
        builder.addCase(fetchUsers.pending); //... this is an action
        builder.addCase(fetchUsers.fulfilled); //... this is an action
        builder.addCase(fetchUsers.rejected); //... this is an action
   }
});

export const usersReducer = usersSlice.reducer;