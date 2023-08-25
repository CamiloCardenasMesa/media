import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get('http://localhost:3005/users'); //making the request. 
    return response.data; // resoponse.data === [{id: 1, name: 'Camilo'}] 
}); 

export { fetchUsers }; 
