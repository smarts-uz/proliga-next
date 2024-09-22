import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activities: [],
  isLoading: false,
  error: null,
}

const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {},
  // extraReducers:,
})

export const { setTeams, addGameToTeam } = teamsSlice.actions

export default teamsSlice.reducer
