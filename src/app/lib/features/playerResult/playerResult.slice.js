import { createSlice } from '@reduxjs/toolkit'
import { playerResultExtraReducer } from './playerResult.extraReducer'

const initialState = {
  players: [],
  isLoading: false,
  error: null,
}

export const playerResultSlice = createSlice({
  name: 'playerResult',
  initialState,
  extraReducers: playerResultExtraReducer,
})

export default playerResultSlice.reducer
