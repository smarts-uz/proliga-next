import { createSlice } from '@reduxjs/toolkit'
import { playersExtraReducer } from './players.extraReducer'

const initialState = {
  topPlayers: [],
  topPlayersLoading: false,
  topPlayersError: null,
  currentPlayer: {},
  players: [],
  isLoading: false,
  error: null,
}

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    setCurrentPlayer: (state, action) => {
      state.currentPlayer =
        state.players.find((p) => p.id === action.payload) ?? {}
    },
    addPlayersToStore: (state, action) => {
      state.players = [...state.players, action.payload]
    },
  },
  extraReducers: playersExtraReducer,
})

export const { setCurrentPlayer } = playersSlice.actions

export default playersSlice.reducer
