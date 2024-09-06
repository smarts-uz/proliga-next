import { createSlice } from '@reduxjs/toolkit'
import { TABS } from '../../../utils/tabs.util'
import {
  setTeamPlayersReducer,
  updatePlayerInTeamReducer,
  softDeletePlayerFromTeamReducer,
} from './game.reducer'
import { TOUR } from 'app/utils/tour.util'

const initialState = {
  team: null,
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
  capitan: null,
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
  clubs: null,
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
      if(tour){
        state.currentTour = tour
        state.currentTourIndex = tourIndex
      }
    },
    setTab: (state, action) => {
      state.tab = action.payload
    },
    setTeam: (state, action) => {
      state.capitan = action.payload.captain_id
      state.team = action.payload
    },
    setTourTeam: (state, action) => {
      state.tour_team = action.payload
    },
    setClubs: (state, action) => {
      state.clubs = action.payload
    },
    setCapitan: (state, action) => {
      const capitan = action.payload

      if (capitan) {
        state.capitan = capitan
      }
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
