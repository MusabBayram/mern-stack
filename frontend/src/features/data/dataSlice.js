import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dataService from "./dataService";

const initialState = {
    notlar: [],
    isHata: false,
    isBasari: false,
    isYukleniyor: false,
    mesaj: ''
}

export const notSlice = createSlice({
    name: 'notlar',
    initialState,
    reducers:{
        reset: (state) => initialState
    }
})

export const notOlustur = createAsyncThunk('notlar/create', async (notData, thunkAPI) => {
     try {
        
        const token = thunkAPI.getState().auth.kullanici.token

        return await dataService.notOluştur(notData, token)
    } 
    catch (error) {
        const mesaj = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(mesaj)
    }
})

export const {reset} = notSlice.actions

export default notSlice.reducer