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
  },
  extraReducers: teamsExtraReducer,
})

export const { setTeams } = teamsSlice.actions

export default teamsSlice.reducer
