'use client'
import { createSlice } from '@reduxjs/toolkit'

const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL.slice(8, 28)

const initialState = {
  userAuth: null,
  userTable: null,
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
  },
})

export const { setUserAuth, setUserTable, setUserPhoto } = authSlice.actions

export default authSlice.reducer
