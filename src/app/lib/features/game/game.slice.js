import { createSlice } from '@reduxjs/toolkit'
import { tabs } from '../../../utils/tabs.util'
import {
  addPlayerToTeamReducer,
  deletePlayerFromTeamReducer,
  updatePlayerInTeamReducer,
} from './game.reducer'

const initialState = {
  team: [],
  GOA: [],
  DEF: [],
  MID: [],
  STR: [],
  formation: '',
  tour: null,
  tab: tabs.Transfer,
  capitan: null,
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setTeam: (state, action) => {
      state.team = action.payload
    },
    setTour: (state, action) => {
      state.tour = action.payload
    },
    setTab: (state, action) => {
      state.tab = action.payload
    },
    setCapitan: (state, action) => {
      state.capitan = action.payload
    },
    addPlayerToTeam: addPlayerToTeamReducer,
    deletePlayerFromTeam: deletePlayerFromTeamReducer,
    updatePlayerInTeam: updatePlayerInTeamReducer,
  },
})

export const {
  setTeam,
  setTour,
  setTab,
  setCapitan,
  addPlayerToTeam,
  deletePlayerFromTeam,
  updatePlayerInTeam,
} = gameSlice.actions

export default gameSlice.reducer
