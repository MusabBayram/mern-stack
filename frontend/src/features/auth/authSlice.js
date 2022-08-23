import { createSlice } from "@reduxjs/toolkit";


const kullanici = JSON.parse(localStorage.getItem('kullanici'))

const initialState = {
    kullanici: kullanici ? kullanici : null,
    isHata: false,
    isBasari: false,
    isYukleniyor: false,
    mesaj:''
}


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