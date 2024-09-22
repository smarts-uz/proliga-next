import { createSlice } from '@reduxjs/toolkit'
import { teamsExtraReducer } from './teams.extraReducer'

const initialState = {
  allTeams: [],
  teamsLoading: false,
  teamsError: null,
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
  },
  extraReducers: teamsExtraReducer,
})

export const { setTeams, addGameToTeam } = teamsSlice.actions

export default teamsSlice.reducer
