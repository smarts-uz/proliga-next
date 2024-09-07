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
  reducers: {
    setPlayers: (state, action) => {
      state.players = action.payload
    },
  },
  extraReducers: playersExtraReducer,
})

export const { setPlayers } = playersSlice.actions

export default playersSlice.reducer
