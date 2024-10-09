import { createSlice } from '@reduxjs/toolkit'
import { packagesExtraReducer } from './packages.extraReducer'

const initialState = {
  packages: [],
  currentPackage: {},
  isLoading: false,
  error: null,
}

const packagesSlice = createSlice({
  name: 'packages',
  initialState,
  reducers: {
    setCurrentPackage: (state, action) => {
      state.currentPackage = state.packages.find(
        (item) => item.id === action.payload
      )
    },
  },
  extraReducers: packagesExtraReducer,
})

export const { setCurrentPackage } = packagesSlice.actions

export default packagesSlice.reducer
