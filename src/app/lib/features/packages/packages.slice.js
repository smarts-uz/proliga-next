import { createSlice } from '@reduxjs/toolkit'
import { packagesExtraReducer } from './packages.extraReducer'

const initialState = {
  packages: [],
  isLoading: false,
  error: null,
}

const packagesSlice = createSlice({
  name: 'packages',
  initialState,
  extraReducers: packagesExtraReducer,
})

export default packagesSlice.reducer
