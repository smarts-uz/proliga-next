import { createSlice } from '@reduxjs/toolkit'
import { TABS } from '../../../utils/tabs.util'
import {
  setTeamPlayersReducer,
  updatePlayerInTeamReducer,
  softDeletePlayerFromTeamReducer,
} from './game.reducer'
import { TOUR } from 'app/utils/tour.util'

const initialState = {
  teamCount: 0,
  playersCount: {
    GOA: 0,
    DEF: 0,
    MID: 0,
    STR: 0,
  },
  tour_team: null,
  tours: null,
  currentTour: 0,
  currentTourIndex: 0,
  tab: TABS.Transfer,
  GOA: [],
  DEF: [],
  MID: [],
  STR: [],
  indexes: {
    GOA: 0,
    DEF: 0,
    MID: 0,
    STR: 0,
  },
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setTeamPlayers: setTeamPlayersReducer,
    setTours: (state, action) => {
      state.tours = action.payload
      const tour = state.tours.find(
        (tour) => tour.status === TOUR.notStartedTransfer
      )
      const tourIndex = state.tours.findIndex(
        (tour) => tour.status === TOUR.notStartedTransfer
      )
      if (tour) {
        state.currentTour = tour
        state.currentTourIndex = tourIndex
      }
    },
    setTab: (state, action) => {
      state.tab = action.payload
    },
    setTourTeam: (state, action) => {
      state.tour_team = action.payload
    },
    setCurrentTourIndex: (state, action) => {
      state.currentTour = state.tours[action.payload]
      state.currentTourIndex = action.payload
    },
    softDeletePlayerFromTeam: softDeletePlayerFromTeamReducer,
    updatePlayerInTeam: updatePlayerInTeamReducer,
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
