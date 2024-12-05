import { createSlice } from '@reduxjs/toolkit'
import { authExtraReducer } from './auth.extraReducer'

const initialState = {
  userAuth: null,
  userTable: null,
  temp: null,
  fingerprint: null,
  geo: null,
  geoLoading: false,
  geoError: null,
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
    setGeo: (state, action) => {
      state.geo = action.payload
    },
  },
  extraReducers: authExtraReducer,
})

export const {
  setUserAuth,
  setUserTable,
  setUserPhoto,
  setUserTempData,
  setFingerprint,
  setGeo,
} = authSlice.actions

export default authSlice.reducer
