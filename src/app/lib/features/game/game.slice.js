import { createSlice } from '@reduxjs/toolkit'
import { tabs } from '../../../utils/tabs.util'
import {
  addPlayerToTeamReducer,
  setTeamReducer,
  updatePlayerInTeamReducer,
  softDeletePlayerFromTeamReducer,
  setDraggablePlayerReducer,
  deletePlayerByIdReducer,
} from './game.reducer'

const initialState = {
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
    setTeam: setTeamReducer,
    setTour: (state, action) => {
      state.tour = action.payload
    },
    setTab: (state, action) => {
      state.tab = action.payload
    },
    setCapitan: (state, action) => {
      console.log('setCapitan', action.payload)
      state.capitan = action.payload
    },
    addPlayerToTeam: addPlayerToTeamReducer,
    softDeletePlayerFromTeam: softDeletePlayerFromTeamReducer,
    updatePlayerInTeam: updatePlayerInTeamReducer,
    setDraggablePlayer: setDraggablePlayerReducer,
    deletePlayerById: deletePlayerByIdReducer,
  },
})

export const {
  setTeam,
  setTour,
  setTab,
  setCapitan,
  addPlayerToTeam,
  softDeletePlayerFromTeam,
  updatePlayerInTeam,
  setDraggablePlayer,
  deletePlayerById,
} = gameSlice.actions

export default gameSlice.reducer
