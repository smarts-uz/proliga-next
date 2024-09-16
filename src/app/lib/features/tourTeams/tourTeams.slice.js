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
    setCurrentTourTeamIndex: (state, action) => {
      if (action.payload && state.tourTeams[action.payload]) {
        state.currentTourTeam = state.tourTeams[action.payload]
        state.currentTourTeamIndex = action.payload
      }
    },
  },
  extraReducers: tourTeamExtraReducer,
})

export const { setCurrentTourTeamIndex } = tourTeamSlice.actions

export default tourTeamSlice.reducer
