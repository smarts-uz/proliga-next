import { createSlice } from '@reduxjs/toolkit'
import { tourTeamExtraReducer } from './tourTeams.extraReducer'

const initialState = {
  tourTeams: [],
  currentTourTeam: {},
  currentTourTeamIndex: 0,
  isLoading: false,
  error: null,
}

const tourTeamSlice = createSlice({
  name: 'tourTeams',
  initialState,
  reducers: {
    setCaptain: (state, action) => {
      state.currentTourTeam.captain_id = action.payload
    },
    setCurrentTourTeamIndex: (state, action) => {
      if (action.payload && state.tourTeams[action.payload]) {
        state.currentTourTeam = state.tourTeams[action.payload]
        state.currentTourTeamIndex = action.payload
      }
    },
  },
  extraReducers: tourTeamExtraReducer,
})

export const { setCaptain, setCurrentTourTeamIndex } = tourTeamSlice.actions

export default tourTeamSlice.reducer
