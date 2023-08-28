import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { AddUser } from "../thunks/AddUser";

const usersSlice = createSlice({
   name: "users",
   initialState: {
        data: [],
        isLoading: false,
        error: null,
   },
   extraReducers(builder) {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.isLoading = true;
        }); 
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        }); 
        builder.addCase(fetchUsers.rejected, (state, action ) => {
            state.isLoading = false;
            state.error = action.error;
        }); 

        builder.addCase(AddUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(AddUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload);
        });
        builder.addCase(AddUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
   },
});

export const usersReducer = usersSlice.reducer;