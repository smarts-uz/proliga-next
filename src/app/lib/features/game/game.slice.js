import { createSlice } from '@reduxjs/toolkit'
import { tabs } from '../../../utils/tabs.util'
import {
  addPlayerToTeamReducer,
  setTeamPlayersReducer,
  updatePlayerInTeamReducer,
  softDeletePlayerFromTeamReducer,
  setDraggablePlayerReducer,
  deletePlayerByIdReducer,
  setCapitanReducer,
} from './game.reducer'

const initialState = {
  team: null,
  teamCount: 0,
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
      state.team = action.payload
    },
    setTourTeam: (state, action) => {
      state.tour_team = action.payload
    },
    setCapitan: setCapitanReducer,
    addPlayerToTeam: addPlayerToTeamReducer,
    softDeletePlayerFromTeam: softDeletePlayerFromTeamReducer,
    updatePlayerInTeam: updatePlayerInTeamReducer,
    setDraggablePlayer: setDraggablePlayerReducer,
    deletePlayerById: deletePlayerByIdReducer,
  },
})

export const {
  setTeamPlayers,
  setTour,
  setTab,
  setTeam,
  setCapitan,
  addPlayerToTeam,
  softDeletePlayerFromTeam,
  updatePlayerInTeam,
  setDraggablePlayer,
  deletePlayerById,
  setTourTeam,
} = gameSlice.actions

export default gameSlice.reducer
