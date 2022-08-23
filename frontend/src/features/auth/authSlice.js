import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";


const kullanici = JSON.parse(localStorage.getItem('kullanici'))

const initialState = {
    kullanici: kullanici ? kullanici : null,
    isHata: false,
    isBasari: false,
    isYukleniyor: false,
    mesaj:''
}


export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    try {
        return await authService.register(user)
    } catch (error) {
        const mesaj = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(mesaj)
    }
})


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        reset: (state) => {
            state.isHata= false
            state.isBasari= false
            state.isYukleniyor= false
            state.mesaj=''
        }
    },
    extraReducers:()=>{}
})

export const {reset} =authSlice.actions;
export default authSlice.reducer;