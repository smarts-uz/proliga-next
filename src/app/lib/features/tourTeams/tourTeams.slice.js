import { createSlice } from '@reduxjs/toolkit'
import { tourTeamExtraReducer } from './tourTeams.extraReducer'

const initialState = {
  tourTeams: [],
  currentTourTeam: {},
  currentTourTeamIndex: 0,
  teamPrice: 0,
  teamBalance: 0,
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
    setTeamBalance: (state, action) => {
      const { price, balance } = action.payload

      state.teamPrice = price
      state.teamBalance = balance - price
    },
  },
  extraReducers: tourTeamExtraReducer,
})

export const { setCurrentTourTeamIndex, setTeamBalance } = tourTeamSlice.actions

export default tourTeamSlice.reducer
