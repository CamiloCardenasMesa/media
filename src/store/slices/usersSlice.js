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
        builder.addCase(fetchUsers.pending, (state, action) => {
            /** actualizar nuestro objeto de estado para mostrar 
             * al usuario al usuario que estamos cargando datos
             */
        }); 
        builder.addCase(fetchUsers.fulfilled, (state, action) => {

        }); 
        builder.addCase(fetchUsers.rejected, (state, action ) => {

        }); 
   }
});

export const usersReducer = usersSlice.reducer;