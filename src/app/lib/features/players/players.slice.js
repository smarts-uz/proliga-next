import { createSlice } from '@reduxjs/toolkit'
import { playersExtraReducer } from './players.extraReducer'

const initialState = {
  players: [],
  isLoading: false,
  error: null,
}

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  extraReducers: playersExtraReducer,
})

export default playersSlice.reducer
