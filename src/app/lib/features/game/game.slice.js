import { createSlice } from '@reduxjs/toolkit'
import { tabs } from '../../../utils/tabs.util'
import {
  setTeamPlayersReducer,
  updatePlayerInTeamReducer,
  softDeletePlayerFromTeamReducer,
  setDraggablePlayerReducer,
} from './game.reducer'

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
  tour: null,
  capitan: null,
  tab: tabs.Transfer,
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
    setTour: (state, action) => {
      state.tour = action.payload
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
    softDeletePlayerFromTeam: softDeletePlayerFromTeamReducer,
    updatePlayerInTeam: updatePlayerInTeamReducer,
  },
})

export const {
  setTeamPlayers,
  setTour,
  setTab,
  setTeam,
  setCapitan,
  softDeletePlayerFromTeam,
  updatePlayerInTeam,
  setTourTeam,
  setClubs,
} = gameSlice.actions

export default gameSlice.reducer
