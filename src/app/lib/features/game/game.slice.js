import { createSlice } from '@reduxjs/toolkit'
import { tabs } from '../../../utils/tabs.util'
import {
  addPlayerToTeamReducer,
  deletePlayerFromTeamReducer,
} from './game.reducer'

const initialState = {
  team: 0,
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
  },
})

export const {
  setTeam,
  setCompetition,
  setTour,
  setTab,
  setCapitan,
  addPlayerToTeam,
  deletePlayerFromTeam,
} = gameSlice.actions

export default gameSlice.reducer
