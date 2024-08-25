import { createSlice } from '@reduxjs/toolkit'

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