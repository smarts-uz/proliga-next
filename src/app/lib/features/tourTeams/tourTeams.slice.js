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
    setCurrentTourTeamTransfersCount: (state, action) => {
      state.currentTourTeam.current_count_of_transfers = action.payload
    },
  },
  extraReducers: tourTeamExtraReducer,
})

export const {
  setCurrentTourTeamIndex,
  setTeamBalance,
  setCurrentTourTeamTransfersCount,
} = tourTeamSlice.actions

export default tourTeamSlice.reducer
