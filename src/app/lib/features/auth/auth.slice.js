'use client'
import { createSlice } from '@reduxjs/toolkit'

const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL.slice(8, 28)
// const auth =
//   typeof window !== 'undefined' &&
//   JSON.parse(localStorage.getItem(`user-auth-${sbUrl}`))
// const table =
//   typeof window !== 'undefined' &&
//   JSON.parse(localStorage.getItem(`user-table-${sbUrl}`))

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
  },
})

export const { setUserAuth, setUserTable } = authSlice.actions

export default authSlice.reducer
