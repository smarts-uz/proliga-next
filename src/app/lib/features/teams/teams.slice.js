import { createSlice } from '@reduxjs/toolkit'
import { teamsExtraReducer } from './teams.extraReducer'

const initialState = {
  teams: [],
  isLoading: false,
  error: null,
}

const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    setTeams: (state, action) => {
      state.teams = action.payload
    },
    addGameToTeam: (state, action) => {
      const { game } = action.payload
      if (game) {
        state.teams.push(game)
      }
    },
  },
  extraReducers: teamsExtraReducer,
})

export const { setTeams, addGameToTeam } = teamsSlice.actions

export default teamsSlice.reducer
