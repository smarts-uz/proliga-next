import { createSlice } from '@reduxjs/toolkit'
import { seasonExtraReducer } from './season.extraReducer'

const initialState = {
  season: {},
  isLoading: false,
  error: null,
}

const seasonsSlice = createSlice({
  name: 'season',
  initialState,
  reducers: {},
  extraReducers: seasonExtraReducer,
})

export default seasonsSlice.reducer
