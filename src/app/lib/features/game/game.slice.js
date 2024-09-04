import { createSlice } from '@reduxjs/toolkit'
import { tabs } from '../../../utils/tabs.util'
import {
  addPlayerToTeamReducer,
  setTeamPlayersReducer,
  updatePlayerInTeamReducer,
  softDeletePlayerFromTeamReducer,
  setDraggablePlayerReducer,
  deletePlayerByIdReducer,
} from './game.reducer'

const initialState = {
  team: null,
  teamCount: 0,
  GOA: [],
  DEF: [],
  MID: [],
  STR: [],
  formation: '',
  tour: null,
  tab: tabs.Transfer,
  capitan: null,
  indexes: {
    GOA: 0,
    DEF: 0,
    MID: 0,
    STR: 0,
  },
  draggablePlayer: null,
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
    setCapitan: (state, action) => {
      console.log('setCapitan', action.payload && JSON.parse(action.payload))
      state.capitan = action.payload
    },
    setTeam: (state, action) => {
      state.team = action.payload
    },
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
} = gameSlice.actions

export default gameSlice.reducer
