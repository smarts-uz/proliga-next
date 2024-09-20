import { createSlice } from '@reduxjs/toolkit'
import { matchesExtraReducer } from './matches.extraReducer'

const initialState = {
  matches: [],
  isLoading: false,
  error: null,
}

const matchesSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {},
  extraReducers: matchesExtraReducer,
})

export default matchesSlice.reducer
