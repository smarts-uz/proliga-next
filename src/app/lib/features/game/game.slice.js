import { createSlice } from '@reduxjs/toolkit'
import { TABS } from '../../../utils/tabs.util'

const initialState = {
  teamCount: 0,
  tour_team: null,
  currentTour: 0,
  currentTourIndex: 0,
  tab: TABS.Transfer,
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setTab: (state, action) => {
      state.tab = action.payload
    },
    setTourTeam: (state, action) => {
      state.tour_team = action.payload
    },
  },
})

export const {
  setTeamPlayers,
  setTours,
  setTab,
  setTeam,
  setCapitan,
  softDeletePlayerFromTeam,
  updatePlayerInTeam,
  setTourTeam,
  setClubs,
  setCurrentTourIndex,
} = gameSlice.actions

export default gameSlice.reducer
