import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


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

export const {reset} = notSlice.actions

export default notSlice.reducer