import { createSlice } from '@reduxjs/toolkit'
import { tabs } from '../../../utils/tabs.util'
import {
  addPlayerToTeamReducer,
  deletePlayerFromTeamReducer,
  updatePlayerInTeamReducer,
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
    setTeam: (state, action) => {
      const team = action.payload
      state.team = team
      team.forEach((player) => {
        state[player.position].push(player)
      })
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
