import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get('http://localhost:3005/users'); //making the request. 
    
    //only dev
    await pause(1000);
    
    return response.data; // resoponse.data === [{id: 1, name: 'Camilo'}] 
}); 

//dev only
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};

/**
 * when create "const fetchUsers" automatically added:
 * 1) fetchUsers.pending  === 'users/fetch/pending'
 * 2) fetchUsers.fulfilled === 'users/fetch/fulfilled'
 * 3) fetchUsers.rejected === 'users/fetch/rejected'
 */

export { fetchUsers }; 
