'use client'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userAuth: null,
  userTable: null,
  temp: null,
  fingerprint: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserAuth: (state, action) => {
      state.userAuth = action.payload
    },
    setUserTable: (state, action) => {
      state.userTable = action.payload ?? null
    },
    setUserPhoto: (state, action) => {
      state.userTable.photo = action.payload
    },
    setUserTempData: (state, action) => {
      state.temp = action.payload
    },
    setFingerprint: (state, action) => {
      state.fingerprint = action.payload
    },
  },
})

export const {
  setUserAuth,
  setUserTable,
  setUserPhoto,
  setUserTempData,
  setFingerprint,
} = authSlice.actions

export default authSlice.reducer
