'use client'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userAuth: null,
  userTable: null,
  publicUrl: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserAuth: (state, action) => {
      state.userAuth = action.payload
    },
    setUserTable: (state, action) => {
      state.userTable = action.payload
    },
    setUserPhoto: (state, action) => {
      state.userTable.photo = action.payload
    },
    setPublicUrl: (state, action) => {
      state.publicUrl = action.payload
    },
  },
})

export const { setUserAuth, setUserTable, setUserPhoto, setPublicUrl } =
  authSlice.actions

export default authSlice.reducer
