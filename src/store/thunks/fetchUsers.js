import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUsers = createAsyncThunk('users/fetch'); //I can put any string I want. in this case 'users/fetch'

/**
 * Thunk function:
 * the goal of this thunk is to fetch some data and
 * automatically have some actions dispatched for me
 * as I´m fetching the data
 */