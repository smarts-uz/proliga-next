import { createSlice } from '@reduxjs/toolkit'
import { prizesExtraReducer } from './prize.extraReducer'

const initialState = {
  prizes: [],
  isLoading: false,
  error: null,
}

const prizesSlice = createSlice({
  name: 'prizes',
  initialState,
  reducers: {},
  extraReducers: prizesExtraReducer,
})

export default prizesSlice.reducer
