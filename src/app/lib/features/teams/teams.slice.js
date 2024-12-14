import { createSlice } from '@reduxjs/toolkit'
import { teamsExtraReducer } from './teams.extraReducer'

const initialState = {
  allTeams: [],
  teamsLoading: false,
  teamsError: null,
  topTeams: [],
  topTeamsLoading: false,
  topTeamsError: null,
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
      if (action.payload) {
        state.teams.push(action.payload)
      }
    },
    resetTeams: () => initialState,
  },
  extraReducers: teamsExtraReducer,
})

export const { setTeams, addGameToTeam, resetTeams } = teamsSlice.actions

export default teamsSlice.reducer
